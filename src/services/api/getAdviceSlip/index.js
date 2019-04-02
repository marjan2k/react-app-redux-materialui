import axios from 'axios';

export default function getAdviceSlip() {
  return axios.get(
    'https://api.adviceslip.com/advice'
  ).then((response) => response.data.slip)
}
