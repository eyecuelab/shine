// import { put } from 'redux-saga/effects';

const fetchOrders = async (token) => {
  console.log('HIT API');
  const response = await fetch('http://127.0.0.1:8080/orders', {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });
  const result = await response.json();
  //

  if (response.status >= 400) {
    throw new Error(result.errors);
  } else {
    return result.data;
  }
};

function* postOrder(order, token) {
  // NOTES FOR CONFIGURING IMAGE FOR s3 BUCKET>>>
  // const uri = "file:///Users/drakewilcox/Library/Developer/CoreSimulator/Devices/73EA41FC-3D3A-49DC-B333-3FF331C700CD/data/Containers/Data/Application/3E45CB45-3EBB-489F-B6D9-10E3DFAC8432/Library/Caches/ExponentExperienceData/%2540anonymous%252Fshine-365e6243-c19c-40fb-a714-a4e038f7b903/ImagePicker/76D47622-8610-46DC-A2A3-8792800C2DE3.jpg"

  // let uriParts = uri.split('.');
  // let fileType = uriParts[uriParts.length - 1];
  // let formData = new FormData();
  // FormData.append('photo', {
  //   uri,
  //   name: `photo.${fileType}`,
  //   type: `image/${fileType}`,
  // })
  // console.log(FormData)
  console.log('ORDER: ', order);
  const urlLink = 'http://127.0.0.1:8080/orders';
  const response = yield fetch(urlLink, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(order),
  });
  if (response.ok && response.status === 200) {
    return response;
  } else {
    throw new Error(response.json());
  }
}

export { fetchOrders, postOrder };
