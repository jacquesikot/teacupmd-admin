import React, { useState } from 'react';
import { Button, Box, useToast, Text } from '@chakra-ui/react';

import { Layout, TextInput } from '../../components';
import { Container, Heading, FormContainer } from './styles';
import useProducts from './useProducts';

import firebaseFunc from '../../firebase/init';

const Products = () => {
  const toast = useToast();

  const [file, setFile] = useState<any>(null);
  const [imageUrl, setImageUrl] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onFileChange = (e) => {
    setFile(e.target.files);
  };

  const handleUpload = async () => {
    try {
      if (file.length < 1)
        return toast({
          title: 'Images',
          description: 'Add images first',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top',
        });

      setIsLoading(true);

      const urls = await firebaseFunc.uploadImgs(file);
      setImageUrl(urls);

      setIsLoading(false);
      toast({
        title: 'Images',
        description: 'image uploaded succesfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      setIsLoading(false);
      toast({
        title: 'Images',
        description: 'image uploaded succesfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <Layout>
      <Container>
        <Heading>Upload Images</Heading>

        <Box height={20} />

        <input
          placeholder="Images"
          type="file"
          onChange={onFileChange}
          multiple
        />

        <Button onClick={handleUpload} isLoading={isLoading} mt={20}>
          Upload Image
        </Button>

        {imageUrl.map((i, index) => (
          <Text mt={5} key={index}>
            {i}
          </Text>
        ))}
      </Container>
    </Layout>
  );
};

export default Products;
