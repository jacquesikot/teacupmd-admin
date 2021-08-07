import React from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Switch,
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
import { Container, Heading, FormContainer } from './styles';
import useProducts from './useProducts';

const Products = () => {
  const {
    productSchema,
    handleSubmit,
    setOnSale,
    onSale,
    onFileChange,
    setCategory,
    categories,
    loading,
    products,
    handleDelete,
  } = useProducts();

  return (
    <Layout>
      <Container>
        <Heading>Products</Heading>
        <Formik
          initialValues={{
            title: '',
            details: '',
            price: '',
            sale_price: '',
            nutrition_details: '',
          }}
          validationSchema={productSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, handleChange, handleSubmit, touched }) => (
            <FormContainer onSubmit={handleSubmit} id="addProduct">
              <TextInput
                placeholder="PRODUCT TITLE"
                id="title"
                type="text"
                onChange={handleChange}
                error={errors.title ? true : false}
                touched={touched.title ? true : false}
              />
              <TextInput
                placeholder="DESCRIPTION"
                id="details"
                type="text"
                onChange={handleChange}
                error={errors.details ? true : false}
                touched={touched.details ? true : false}
              />
              <TextInput
                placeholder="NUTRITIONAL INFORMATION"
                id="nutrition_details"
                type="text"
                onChange={handleChange}
                error={errors.nutrition_details ? true : false}
                touched={touched.nutrition_details ? true : false}
              />
              <TextInput
                placeholder="PRICE"
                id="price"
                type="number"
                onChange={handleChange}
                error={errors.price ? true : false}
                touched={touched.price ? true : false}
              />
              <Switch
                size="md"
                value="true"
                name="onSale"
                onChange={(e) => setOnSale(!onSale)}
              />
              {onSale && (
                <TextInput
                  placeholder="SALE PRICE"
                  id="sale_price"
                  type="number"
                  onChange={handleChange}
                  error={errors.sale_price ? true : false}
                  touched={touched.sale_price ? true : false}
                />
              )}
              <input
                placeholder="Images"
                type="file"
                onChange={onFileChange}
                multiple
              />
              <Menu closeOnSelect={false}>
                <MenuButton as={Button}>Categories</MenuButton>
                <MenuList>
                  <MenuOptionGroup
                    title="Main"
                    type="checkbox"
                    onChange={(values) => setCategory(values as string[])}
                  >
                    {categories &&
                      categories.map((c) => (
                        <MenuItemOption value={c.name}>{c.name}</MenuItemOption>
                      ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
              <Button type="submit" form="addProduct" isLoading={loading}>
                Add Product
              </Button>
            </FormContainer>
          )}
        </Formik>
        <Heading>Products</Heading>
        <Table variant="simple">
          <TableCaption>Teacup MD Primary Products</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Price</Th>
              <Th>Sale Price</Th>
              <Th>Image</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products &&
              products.map((p) => {
                return (
                  <Tr>
                    <Td>{p.id}</Td>
                    <Td>{p.title}</Td>
                    <Td>{p.details}</Td>
                    <Td>{p.price}</Td>
                    <Td>{p.sale_price}</Td>
                    <Td>
                      <img src={p.images[0]} width={100} height={100} />
                    </Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        onClick={() => handleDelete(p.id)}
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

export default Products;
