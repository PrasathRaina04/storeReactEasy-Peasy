import { useStoreState, useStoreActions } from 'easy-peasy';

export function JsonPractice(){
    const {jsonPractice , storedata} = useStoreState((state)=>state.jsonPractice);
    const {setJsonPractice, setStoredata}= useStoreActions((actions)=> actions.jsonPractice)



    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((res) => {
            setJsonPractice(res.json);
          })
          .then((data) => {
            console.log(jsonPractice);
          });
      }, []);
    return(
        <>
        
        <h1>Welcome to Json page</h1>
        </>
    )
}