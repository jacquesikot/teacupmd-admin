import { useToast } from '@chakra-ui/toast';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';

import firebaseFunc from '../../firebase/init';

const useProducts = () => {
  const toast = useToast();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [images, setImages] = useState<any>([]);
  const [file, setFile] = useState<any>(null);
  const [category, setCategory] = useState<string[]>();
  const [categories, setCategories] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);
  const [onSale, setOnSale] = useState<boolean>(false);

  const onFileChange = (e) => {
    setFile(e.target.files);
  };

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      setIsLoading(true);
      const urls = await firebaseFunc.uploadImgs(file);
      const data = {
        title: values.title,
        details: values.details,
        nutrition_details: values.nutrition_details,
        price: values.price,
        sale_price: values.sale_price,
        category,
        images: urls,
      };
      await firebaseFunc.addProduct(data);
      setIsLoading(false);
      toast({
        title: 'Products',
        description: 'product added succesfully',
        status: 'success',
        duration: 7000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        title: 'Products',
        description: error.message,
        status: 'error',
        duration: 7000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return {
    handleSubmit,
    loading,
    images,
    onFileChange,
    setOnSale,
    onSale,
    setCategory,
    categories,
    products,
  };
};

export default useProducts;
