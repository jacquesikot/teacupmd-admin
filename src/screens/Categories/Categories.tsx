import React from 'react';
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react';
import { Formik } from 'formik';

import { Layout, TextInput } from '../../components';
import { Heading, Container, FormContainer } from './styles';
import useCategories from './useCategories';

const Categories = () => {
  const {
    categorySchema,
    handleSubmit,
    loading,
    onFileChange,
    categories,
    handleDelete,
    deleteLoading,
  } = useCategories();

  return (
    <Layout>
      <Container>
        <Heading>Add Category</Heading>
        <Formik
          initialValues={{
            name: '',
          }}
          validationSchema={categorySchema}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
            touched,
            values,
          }) => (
            <FormContainer onSubmit={handleSubmit} id="addProduct">
              <TextInput
                placeholder="NAME"
                id="name"
                type="text"
                onChange={handleChange}
                error={errors.name ? true : false}
                touched={touched.name ? true : false}
              />
              <input placeholder="Images" type="file" onChange={onFileChange} />
              <Button type="submit" form="addProduct" isLoading={loading}>
                Add Category
              </Button>
            </FormContainer>
          )}
        </Formik>
        <Heading>Categories</Heading>
        <Table variant="simple">
          <TableCaption>Teacup MD Primary Categories</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Image</Th>
              <Th>Manage</Th>
            </Tr>
          </Thead>
          <Tbody>
            {categories &&
              categories.map((c) => {
                return (
                  <Tr>
                    <Td>{c.id}</Td>
                    <Td>{c.name}</Td>
                    <Td>
                      <img src={c.imgUrl} width={100} height={100} />
                    </Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        onClick={() => handleDelete(c.id)}
                        // isLoading={deleteLoading}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>ID</Th>
              <Th>Image URI</Th>
              <Th>Name</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Container>
    </Layout>
  );
};

export default Categories;
