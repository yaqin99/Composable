import { ref } from 'vue' ;

export default function useFetch (url:string) {
    const filter =ref('');
    const result = ref<any[]>([]) ;  
    const fetchData = async () => {
        const response = await fetch(`${url}?input=${filter.value}`)
        const sample = await response.json() ; 
        result.value = sample.data ; 
        
    }
    return {
        filter , result , fetchData
    }
}