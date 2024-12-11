const axios = require('axios');
const crypto = require('crypto');

// Check giao dịch thành công thất bại 
// Data
const partnerCode = 'MOMO7E8E20241209';
const accessKey = 'IYUmI2q16VW7Kqx0';
const requestId =  Date.now().toString();
const orderId = 'qrc-MOMO7E8E20241209-fb2153b9-e9f5-45f4-9d13-fc611eaee1ef';
const lang = 'vi';

// Thuật toán 256
const rawSignature = `accessKey=${accessKey}&orderId=${orderId}&partnerCode=${partnerCode}&requestId=${requestId}`;
const secretKey = 'qJ0MLqtwl1rTFBM0a9TRDBvm0w8jHIgK'; 
const signature = crypto.createHmac('sha256', secretKey).update(rawSignature).digest('hex');


// POst data kiểm tra
const data = {
  partnerCode,
  requestId,
  orderId,
  signature,
  lang,
};


axios.post('https://payment.momo.vn/v2/gateway/api/query', data)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });