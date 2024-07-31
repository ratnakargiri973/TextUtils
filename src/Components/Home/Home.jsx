// import React, { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './Home.css'

// function Home() {
//     const [data, setData] = useState("");

//     const notify1 = () => toast("Success: Converted to uppercase");
//     const notify2 = () => toast("Success: Converted to lowercase");
//     const notify3 = () => toast("Success: Cleared Text");
//     const notify4 = () => toast("Success: Copied to clipboard");
//     const notify5 = () => toast("Success: Removed extra spaces");

//     function convertUppercase() {
//         setData(data.toUpperCase());
//         notify1();
//     }

//     function convertLowercase() {
//         setData(data.toLowerCase());
//         notify2();
//     }

//     function clearText() {
//         setData("");
//         notify3();
//     }

//     function copyToClipboard() {
//         navigator.clipboard.writeText(data).then(() => {
//             notify4();
//         });
//     }

//     function removeExtraSpaces() {
//         setData(data.trim());
//         notify5();
//     }


//     const wordCount = data.trim().split(/\s+/).filter(Boolean).length;

//     return (
//         <>
//             <div className="home">
//                 <div className="Hero">
//                 <h1>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
//                 <h2>Enter Your Text Here:</h2>
//                 <textarea rows={10} cols={100} value={data} onChange={(e) => setData(e.target.value)}></textarea>

//                 <div className="Btns">
//                     <button onClick={convertUppercase} style={{backgroundColor:"blue"}}>Convert Uppercase</button>
//                     <button onClick={convertLowercase} style={{backgroundColor:"blue"}}>Convert Lowercase</button>
//                     <button onClick={clearText} style={{backgroundColor:"red"}}>Clear Text</button>
//                     <button onClick={copyToClipboard} style={{backgroundColor:"green"}}>Copy To Clipboard</button>
//                     <button onClick={removeExtraSpaces} style={{backgroundColor:"blue"}}>Remove Extra Spaces</button>
//                 </div>

//                 <div className="summary">
//                     <h2>Summary Of Your Text</h2>
//                     <p>Number of words:{wordCount}</p>
//                     <p>Number of characters: {data.length}</p>
//                     <p>Reading Time: {(wordCount / 3).toFixed(2)} minutes</p>
//                 </div>

                
//                     <h2>Preview Document</h2>
//                     <textarea value={data} cols={100} rows={6} readOnly></textarea>
            
//                 </div>
//             </div>
//             <ToastContainer
//                   position="top-center"
//                 autoClose={3000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                  rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"/>
//         </>
//     );
// }

// export default Home;

import React, { useReducer } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';

// Define action types
const ACTIONS = {
  SET_TEXT: 'set_text',
  CONVERT_UPPERCASE: 'convert_uppercase',
  CONVERT_LOWERCASE: 'convert_lowercase',
  CLEAR_TEXT: 'clear_text',
  COPY_TO_CLIPBOARD: 'copy_to_clipboard',
  REMOVE_EXTRA_SPACES: 'remove_extra_spaces',
};

// Reducer function to handle state changes
function reducer(currentState, action) {
  switch (action.type) {
    case ACTIONS.SET_TEXT:
      return {  text: action.payload };
    case ACTIONS.CONVERT_UPPERCASE:
      return {  text: currentState.text.toUpperCase() };
    case ACTIONS.CONVERT_LOWERCASE:
      return {  text: currentState.text.toLowerCase() };
    case ACTIONS.CLEAR_TEXT:
      return {  text: "" };
    case ACTIONS.COPY_TO_CLIPBOARD:
      navigator.clipboard.writeText(currentState.text);
      return currentState;
    case ACTIONS.REMOVE_EXTRA_SPACES:
      return { text: currentState.text.trim() };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, { text: "" });

  const notify = (message) => toast(message);

  const handleConvertUppercase = () => {
    dispatch({ type: ACTIONS.CONVERT_UPPERCASE });
    if(state.text==="") notify(null);
    else notify("Success: Converted to uppercase");
  };

  const handleConvertLowercase = () => {
    dispatch({ type: ACTIONS.CONVERT_LOWERCASE });
    if(state.text==="") notify(null);
    else notify("Success: Converted to lowercase");
  };

  const handleClearText = () => {
    dispatch({ type: ACTIONS.CLEAR_TEXT });
    if(state.text==="") notify(null);
    else notify("Success: Cleared Text");
  };

  const handleCopyToClipboard = () => {
    dispatch({ type: ACTIONS.COPY_TO_CLIPBOARD });
    if(state.text==="") notify(null);
    else notify("Success: Copied to clipboard");
  };

  const handleRemoveExtraSpaces = () => {
    dispatch({ type: ACTIONS.REMOVE_EXTRA_SPACES });
    if(state.text==="") notify(null);
    else notify("Success: Removed extra spaces");
  };

  const wordCount = state.text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <>
      <div className="home">
        <div className="Hero">
          <h1>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
          <h2>Enter Your Text Here:</h2>
          <textarea
            rows={10}
            cols={100}
            value={state.text}
            onChange={(e) => dispatch({ type: ACTIONS.SET_TEXT, payload: e.target.value })}
          />

          <div className="Btns">
            <button onClick={handleConvertUppercase} style={{ backgroundColor: "blue" }}>Convert Uppercase</button>
            <button onClick={handleConvertLowercase} style={{ backgroundColor: "blue" }}>Convert Lowercase</button>
            <button onClick={handleClearText} style={{ backgroundColor: "red" }}>Clear Text</button>
            <button onClick={handleCopyToClipboard} style={{ backgroundColor: "green" }}>Copy To Clipboard</button>
            <button onClick={handleRemoveExtraSpaces} style={{ backgroundColor: "blue" }}>Remove Extra Spaces</button>
          </div>

          <div className="summary">
            <h2>Summary Of Your Text</h2>
            <p>Number of words: {wordCount}</p>
            <p>Number of characters: {state.text.length}</p>
            <p>Reading Time: {(wordCount / 3).toFixed(2)} minutes</p>
          </div>

          <h2>Preview Document</h2>
          <textarea value={state.text} cols={100} rows={6} readOnly></textarea>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Home;

