import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { LocalStorageService } from '../services/LocalStorageService';

function PrivatePage({ children }: any) {
    
    const router = useRouter();

    const [session, setSession] = useState()

    useEffect(() => {

        if(typeof window === 'undefined') return ;

        const session = LocalStorageService.get('imp-session-client')

        if(!session) {
            router.replace('/auth/login');
        }
    }, [])
    

    return children
}

export default PrivatePage