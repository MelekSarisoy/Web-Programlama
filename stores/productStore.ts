import { defineStore } from "pinia";
import { db } from "@firebase";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";


interface Product {
  category: string;
  brand: string;
  description: string;
  image: string;
  price: string;


}

interface ProductStoreState {
  products: Product[];
  loading: boolean;
}

export const useProductStore = defineStore("productStore", {
  state: (): ProductStoreState => ({
    products: [],
    loading: false,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, "ImageSlider2"));
        if (querySnapshot.empty) {
          console.warn("No products found in Firestore collection.");
          this.products = [];
        } else {
          this.products = querySnapshot.docs.map((doc) => doc.data() as Product);
        }
      } catch (error) {
        console.error("Error fetching products from Firestore: ", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
