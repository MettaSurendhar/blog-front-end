import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation } from 'react-router-dom';

const Write = () => {

  const location = useLocation();
  const [value, setValue] = useState(location.state ? location.state.para : <></>);


  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder='Title' value={location.state ? location.state.title : <></>} />
        <div className="editorContainer">
        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">

        <div className="item">
          <h1>Publish</h1>
          <span>
            <strong>Status :</strong> Draft
          </span>
          <span>
            <strong>Visibility :</strong> Public
          </span>
          <input type="file" style={{display:"none"}} id="file"
          />
          <label className='file' htmlFor="file">
             Upload Image
          </label>
          <div className="button">
            <button>Save as a draft</button>
            <button>Update </button>
          </div>
        </div>

        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" 
            />
            <label htmlFor="art">
              Art
            </label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="science" 
            />
            <label htmlFor="science">
              Science
            </label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="technology" 
            />
            <label htmlFor="technology">
              Technology
            </label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" id="cinema" 
            />
            <label htmlFor="cinema">
              Cinema
            </label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id="food" 
            />
            <label htmlFor="food">
              Food
            </label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="design" id="design" 
            />
            <label htmlFor="design">
              Design
            </label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Write