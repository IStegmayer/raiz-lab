import React, { useState } from 'react';
import { storage, firestore } from '../firebase/firebase.utils';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import ShowItems from './show-items.component';

import {FormContainer} from './styles/add-item.styles';

const itemForm = {
  itemName: '',
  itemCategory: '',
  itemDescription: '',
  itemPrice: 0,
  discountPrice: 0,
  stock: 0
};

const AddItem = () => {
  const [mainImage, setMainImage] = useState('');
  const [additionalImages, setAdditionalImages] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const handleUpload = async (values) => {
    
    let mainImageUrl = await uploadMainImage();
    let additionalImagesUrls = await uploadAdditionalImages();

    console.log("empiezo a subir el item")
    const itemRef = firestore.doc(`items/${values.itemName}`);
    const snapShot = await itemRef.get();
    if (!snapShot.exists) {
        try {
            await itemRef.set(values);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(additionalImagesUrls);
    itemRef.update({
      'mainImageUrl': mainImageUrl,
      'additionalImagesUrls': additionalImagesUrls
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });

    return;
  }

  const uploadAdditionalImages = async () => {
    let additionalImagesUrls = [];
    //uploadAdditionalImages
    additionalImages.forEach( async (img) => {
      storage.ref(`images/${img.name}`).put(img).then(
        function(snapshot) {
          storage.ref('images').child(img.name).getDownloadURL().then(url => {
            additionalImagesUrls.push(url);
          })
        }
      );
    });
    return additionalImagesUrls;
  };
  
  const uploadMainImage = async () => {
    //uploadMainImage
    let snapShot = await storage.ref(`images/${mainImage.name}`).put(mainImage);
    let url = snapShot.ref.getDownloadURL();
    setImageUrl(url);
    return url;
  }

  return(
      <>
      <h1>Add item page</h1>
      <Formik
        initialValues={itemForm}
        validate={values => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
          handleUpload(values);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null,2));
          //   setSubmitting(false);
          // }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
              <label htmlFor="itemName">itemName</label>
              <Field               
                  name="itemName"
                  type="text"
                  id="itemName"
              />
              <label htmlFor="itemCategory">itemCategory</label>
              <Field               
                  name="itemCategory"
                  type="text"
                  id="itemCategory"
              />
              <label htmlFor="itemDescription">itemDescription</label>
              <Field               
                  name="itemDescription"
                  as="textarea"
                  id="itemDescription"
              />
              <label htmlFor="itemPrice">itemPrice</label>
              <Field               
                  name="itemPrice"
                  type="number"
                  id="itemPrice"
              />
              <label htmlFor="discountPrice">discountPrice</label>
              <Field
                  name="discountPrice"
                  type="number"
                  id="discountPrice"
              />
              <label htmlFor="stock">stock</label>
              <Field
                  name="stock"
                  type="number"
                  id="stock"
              />
              <label htmlFor="mainImage">mainImage</label>
              <input        
                  // value={mainImage}        
                  onChange={e => setMainImage(e.target.files[0])}
                  name="mainImage"
                  type="file"
                  id="mainImage"
              />
              <label htmlFor="additionalImages">additionalImages</label>
              <input                
                  // value={additionalImages}        
                  onChange={e => {setAdditionalImages(Array.from(e.target.files));
                    console.log(additionalImages);}}
                  name="additionalImages"
                  type="file"
                  id="additionalImages"
                  multiple
              />
              <hr />
              <button type="submit" >uploadItem</button>
          <ShowItems />
          </Form>
        )}
      </Formik>

      <img src={imageUrl || 'https://via.placeholder.com/300x300.png'} alt=''/>
      <hr/>
      </>
  );
}

export default AddItem;