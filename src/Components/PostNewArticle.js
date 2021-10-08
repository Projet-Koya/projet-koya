import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContext } from '../App';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";


export default function PostNewArticle() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [articleTitle, setArticleTitle] = useState()
    const [articleContent, setArticleContent] = useState()
    const [editorState, setEditorState] = useState()
    const LoginStatus = useContext(LoginContext)
    /* EDITOR FROM "react-draft-wysiwyg" */
    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    };

    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setArticleContent({ ...articleContent, description: currentContentAsHTML });
    };
	/* END EDITOR */


    const onSubmit = () => {
        fetch("http://localhost:3001/art/article", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                content: articleContent,
                title: articleTitle,
                author: LoginStatus.userID,// userID context,
                category:""
            }),

        })
    }
    return (
        <div>
            <h3>Post New Article</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Titre de l'article</label>
                <input type="text" {...register("title", {required: true, onChange: (e) => setArticleTitle(e.target.value)})}></input>
                <label>Contenu de l'article</label>
                <Editor
                    editorState={EditorState}
                    onEditorStateChange={handleEditorChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    placeholder="Description du chapitre"
                />
            </form>
        </div>
    )
}
