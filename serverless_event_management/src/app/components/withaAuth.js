import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();
    
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/auth/login');
        }
      });
      
      return () => unsubscribe();
    }, [router]);
    
    return <Component {...props} />;
  };
}