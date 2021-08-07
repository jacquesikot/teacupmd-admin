import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react';

import firebaseFunc from '../../firebase/init';

const useCategories = () => {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteIsLoading] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);
  const [categories, setCategories] = useState<any>(null);
  const toast = useToast();

  const onFileChange = (e) => {
    setFile(e.target.files);
  };

  const getcategroies = async () => {
    const categories = await firebaseFunc.getCategories();
    setCategories(categories);
  };

  useEffect(() => {
    getcategroies();
  });

  const categorySchema = Yup.object().shape({
    name: Yup.string(),
  });

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const urls = await firebaseFunc.uploadImgs(file);
      const data = {
        ...values,
        image: urls[0],
      };
      await firebaseFunc.addCategory(values.name, urls[0]);
      setIsLoading(false);
      toast({
        title: 'Category',
        description: 'Category Added successfully',
        status: 'success',
        duration: 7000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        title: 'Category',
        description: 'Failed to add category',
        status: 'error',
        duration: 7000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setDeleteIsLoading(true);
      await firebaseFunc.deleteCategory(id);
      setDeleteIsLoading(false);
      toast({
        title: 'Category',
        description: 'Category Deleted successfully',
        status: 'success',
        duration: 7000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      setDeleteIsLoading(false);
      toast({
        title: 'Category',
        description: 'Failed to delete category',
        status: 'error',
        duration: 7000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return {
    handleSubmit,
    handleDelete,
    loading,
    categorySchema,
    onFileChange,
    categories,
    deleteLoading,
  };
};

export default useCategories;
