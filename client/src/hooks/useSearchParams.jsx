
import { useLocation } from 'react-router';

  export default function useSearchParams() {
    const location = useLocation();
    if(location?.search) return JSON.parse('{"' + decodeURIComponent(location?.search?.substring(1,).replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')
    return {};
  }
