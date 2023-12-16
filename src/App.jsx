import { useState } from "react";
import { addDoc, auth, collection, createUserWithEmailAndPassword, deleteDoc, firestore, getDocs, signInWithEmailAndPassword } from "./config/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

function App() {
  const [data, setData] = useState([]);
  const [create,setCreate]=useState('')
  const [upemail,setUpemail]=useState('')
  const [uppass,setUppass]=useState('')

  const [inemail,setInemail]=useState('')
  const [inpass,setInpass]=useState("")
  return (
    <>
    <h1>Basic Crud with firebase</h1>
      <button
        onClick={async () => {
          let data = await getDocs(collection(firestore, "test"));
          let d = data.docs.map((value) => value.data());
          console.log(d);
          setData(d);
        }}
      >
        Click
      </button>
      <br />
      <br />
        <input type="text" name="" id="" value={create} onChange={(e)=>setCreate(e.target.value)}/>
        <button type="submit" onClick={async()=>{
          try{
           let newDoc=await addDoc(collection(firestore,'test'),{
              name:'john doe',
              place:'america'
            })
            alert(`new Document added with Id ${newDoc.id}`)
          }catch(err){
            alert(err)
          }
        }}>submit</button>
        <br />
        <br />
        <button onClick={async()=>{
          try{
            let refdel=doc(collection(firestore, 'test'), 'ikv4u6dOAYfKmaHO99U8')
            await deleteDoc(refdel)

            alert(' doc deleted')
          }catch(err){
            alert(`err in delete ${err}`)
          }
        }}>Delete data with Specific id wiht onclick</button>
        <br /><br />
        <button onClick={async()=>{
          try{
            const updateRef=doc(collection(firestore,'test'),'bo03gbMC0DCOkHfy5vjy')
            await updateDoc(updateRef,{
              name:'aflu updated@'
            })
            alert('data updated')
          }catch(err){
            alert(`err in updateing ${err}`)
          }
        }}>update data with specific id</button>
      <h2>{JSON.stringify(data)}</h2>
      <br /><br /><br />
      <h1>Authentication with firebase</h1>
      <h2>singup</h2>
      <input type="email" placeholder="email" value={upemail} onChange={(e)=>setUpemail(e.target.value)} /><br />
      <input type="password" placeholder="pass" value={uppass} onChange={(e)=>setUppass(e.target.value)} /><br />
      <button type="submit"  onClick={()=>{
        alert(upemail)
        createUserWithEmailAndPassword(auth,upemail,uppass)
        .then((userCred)=>{
          const user=userCred.user
          alert(`user registered success !!! ${user}`)
        }).catch(err=>{
          alert(`went wrong ${err}`)
        })
      }}>auth</button>

      <br /><br /><br /><br />
      <h2>signin</h2>
      <input type="email" placeholder="email" value={inemail} onChange={(e)=>setInemail(e.target.value)} /><br />
      <input type="password" placeholder="pass" value={inpass} onChange={(e)=>setInpass(e.target.value)}  /><br />
      <button type="submit" onClick={()=>{
        signInWithEmailAndPassword(auth,inemail,inpass)
        .then(usercred=>{
          alert(`user login success ${JSON.stringify(usercred.user)}`)
        }).catch(err=>{
          alert(`${err.message}`)
        })
      }}>auth</button>
    </>
  );
}

export default App;
