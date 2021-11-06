import { ref } from 'vue' ; 

export default function useIncrement () {
    const count = ref(0) ; 
    function hitung () {
        count.value ++ ;
    }
    
    return {
        count , hitung
    }
}