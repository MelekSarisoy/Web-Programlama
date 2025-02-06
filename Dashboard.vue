<template>
  <div>
    <h2>Firestore Data</h2>
    <button @click="addData">Add Data</button>
    <button @click="getData">Get Data</button>
    <button @click="updateData('docIdHere')">Update Data</button>
    <button @click="deleteData('docIdHere')">Delete Data</button>
    <ul>
      <li v-for="item in users" :key="item.id">{{ item.name }} - {{ item.age }}</li>
    </ul>
  </div>
</template>

<script>
import { db } from "@/utils/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: "Jane Doe",
          age: 28,
        });
        console.log("Document written with ID:", docRef.id);
      } catch (error) {
        console.error("Error adding document:", error);
      }
    },
    async getData() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        this.users = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Error getting documents:", error);
      }
    },
    async updateData(docId) {
      try {
        const docRef = doc(db, "users", docId);
        await updateDoc(docRef, {
          age: 30,
        });
        console.log("Document updated successfully");
      } catch (error) {
        console.error("Error updating document:", error);
      }
    },
    async deleteData(docId) {
      try {
        const docRef = doc(db, "users", docId);
        await deleteDoc(docRef);
        console.log("Document deleted successfully");
      } catch (error) {
        console.error("Error deleting document:", error);
      }
    },
  },
};
</script>
