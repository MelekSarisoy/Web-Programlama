import { defineStore } from "pinia";
import { db } from "@/firebase";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    image: string;
}

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [] as Product[],
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchProductsByCategory(categoryId: string) {
            this.loading = true;
            this.error = null;
            this.products = []; // 🔥 Reset products before fetching

            try {
                console.log(`🔍 Fetching products for category: ${categoryId}`);

                // 🔥 Corrected Collection Name: "product" (not "products")
                const q = query(
                    collection(db, "product"), // ✅ Corrected Collection Name
                    where("category", "==", categoryId) // ✅ Ensure Firestore has a "category" field
                );
                const querySnapshot = await getDocs(q);

                if (querySnapshot.empty) {
                    console.warn(`⚠️ No products found for category: ${categoryId}`);
                }

                this.products = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Product), // Explicitly cast Firestore data
                }));

                console.log("✅ Fetched products:", this.products);
            } catch (error) {
                console.error("❌ Error fetching products:", error);
                this.error = "Failed to load products";
            } finally {
                this.loading = false;
            }
        },

        async fetchProductById(id: string) {
            this.loading = true;
            this.error = null;

            try {
                console.log(`Fetching product by ID: ${id}`);

                // 🔥 Corrected Collection Name: "product"
                const docRef = doc(db, "product", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const product = {
                        id: docSnap.id,
                        ...(docSnap.data() as Product),
                    };

                    console.log("✅ Fetched product:", product);

                    // Prevent overwriting all products in the store
                    this.products = [product];
                    return product;
                } else {
                    console.error(`No product found with id: ${id}`);
                    return null;
                }
            } catch (error) {
                console.error("Error fetching product by ID:", error);
                this.error = "Failed to fetch product";
                return null;
            } finally {
                this.loading = false;
            }
        },
    },
});
