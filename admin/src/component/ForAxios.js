import axios from 'axios'

export function ForAxios(resType, resUrl, resProps = null) {
  return axios({
      method: resType,
      url: resUrl,
      data: resProps,
      withCredentials: true
  }).then(response => {
      // 处理成功，返回数据
      return { success: true, data: response.data };
  }).catch(error => {
      // 处理错误，返回错误信息
      console.error('Error fetching data:', error);
      return { success: false, error: error.message };
  });
}

//调用

// const result = await ForAxios('get', servicePath.getArticleList);
//     if (result.success) {
//         console.log('Received data:', result.data);
//     } else {
//         console.log('Failed to fetch data:', result.error);
//     }

export function ForAxiosCsrf(resType, resUrl, resProps =null) {
  return (async () => {
      try {
          // 先获取 CSRF 令牌
          const tokenResponse = await axios.get('/api/getCsrfToken');
          const csrfToken = tokenResponse.data.csrfToken;

          // 然后使用获取到的 CSRF 令牌发送请求
          const response = await axios({
              method: resType,
              url: resUrl,
              headers: {
                  'x-csrf-token': csrfToken,  // CSRF token 放在请求头中
              },
              data: resProps,
              withCredentials: true  // 前后端共享 session
          });
          // 返回响应结果
          return response;
      } catch (error) {
          console.error('Error fetching data:', error);
          // 错误处理，可返回错误信息或者抛出错误
          throw error;  // 选择抛出错误，允许调用者自行决定如何处理
      }
  })();
}


// // 使用 async/await
// async function fetchData() {
//   try {
//       const response = await ForAxiosCsrf('post', 'http://example.com/api/data', { key: 'value' });
//       console.log('Data received:', response.data);
//   } catch (error) {
//       console.error('Failed to fetch data:', error);
//   }
// }

// // 或者使用 then()
// ForAxiosCsrf('post', 'http://example.com/api/data', { key: 'value' })
//   .then(response => {
//       console.log('Data received:', response.data);
//   })
//   .catch(error => {
//       console.error('Failed to fetch data:', error);
//   });

// fetchData();  // 调用函数