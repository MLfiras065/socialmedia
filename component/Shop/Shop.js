import React, { useState, useEffect } from "react";
import Porduct from "../Shop/Product";
import {APP_ENV,APP_API_URL} from "../../privt"
import AddProd from "./AddProd";
import UpdateProd from "./UpdateProd";
import { StyleSheet, ScrollView, View } from "react-native";
import axios from "axios";

const Shop = () => {
  const [poduct, setPoduct] = useState([]);

  const getProduct = () => {
    axios
      .get(`${APP_API_URL}/prod/`)
      .then((res) => {
        setPoduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => getProduct(), []);

  return (
    <ScrollView style={styles.container}>
      <AddProd />
      {poduct.map((pod) => (
        <Porduct key={pod.id} po={pod} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  searchInputContainer: {
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  ShopContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 150,
    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    marginBottom: 10,
    padding: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
  },
  squareMeters: {
    fontSize: 14,
    marginBottom: 5,
    color: "#666",
  },
  cardFooter: {
    padding: 10,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dcdcdc",
    justifyContent: "space-between",
  },
  beds: {
    fontSize: 14,
    color: "#ffa500",
    fontWeight: "bold",
  },
  baths: {
    fontSize: 14,
    color: "#ffa500",
    fontWeight: "bold",
  },
  parking: {
    fontSize: 14,
    color: "#ffa500",
    fontWeight: "bold",
  },
});

export default Shop;
