import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useToast } from '@chakra-ui/react';

import firebaseFunc from '../../firebase/init';

const useDepartment = () => {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [deleteLoading, setDeleteIsLoading] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);
  const [departments, setDepartments] = useState<any>(null);
  const toast = useToast();

  const onFileChange = (e) => {
    setFile(e.target.files);
  };

  const getDepartment = async () => {
    const departments = await firebaseFunc.getDepartments();
    setDepartments(departments);
  };

  useEffect(() => {
    getDepartment();
  });

  const categorySchema = Yup.object().shape({
    name: Yup.string(),
  });

  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      const urls = await firebaseFunc.uploadImgs(file);
      await firebaseFunc.addDepartment(values.name, urls[0]);
      setIsLoading(false);
      toast({
        title: 'Department',
        description: 'Department Added successfully',
        status: 'success',
        duration: 7000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        title: 'Department',
        description: 'Failed to add Department',
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
      await firebaseFunc.deleteDepartment(id);
      setDeleteIsLoading(false);
      toast({
        title: 'Department',
        description: 'Department Deleted successfully',
        status: 'success',
        duration: 7000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      setDeleteIsLoading(false);
      toast({
        title: 'Department',
        description: 'Failed to delete Department',
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
    departments,
    deleteLoading,
  };
};

export default useDepartment;
