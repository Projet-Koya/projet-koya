import React, { useEffect, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LoginContext } from '../App';
import { Editor, convertToRaw } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";

export default function SubArticle() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [subArticleTitle, setSubArticleTitle] = useState();
    const [subArticleContent, setSubArticleContent] = useState();
    const [categories, setCategories] = useState();
    const [articleCategory, setArticleCategory] = useState();
    const [allArticles, setallArticles] = useState()
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const LoginStatus = useContext(LoginContext);
    const [isLoading, setIsLoading] = useState(true);

    /* EDITOR FROM "react-draft-wysiwyg" */
    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    };

    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setSubArticleContent({ ...subArticleContent, description: currentContentAsHTML });
    };
    /* END EDITOR */

    useEffect(() => {
        fetch("http://localhost:3001/cat/category/all")
            .then(res => res.json())
            .then(res => {
                setCategories(res.data);
            });
        fetch("http://localhost:3001/art/article/allList")
            .then(res => res.json())
            .then(res => {
                setallArticles(res.data);
                setIsLoading(false);
            })
            
    }, []);


    const onSubmit = () => {
        fetch("http://localhost:3001/sub/subArticle", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                articleID: LoginStatus.articleID,
                text: subArticleContent.description,
                title: subArticleTitle,
                // UserID: LoginStatus.userID,// userID context,
            }),
        });
    };
    if (isLoading === true) { return null; }
    return (
        <div>
            <h3>Post Sub Article To That Article</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Titre du sub article</label>
                <input type="text" {...register("title", { required: true, onChange: (e) => {setSubArticleTitle(e.target.value)
                // const articleFilter = [...allArticles]
                // articleFilter.filter((article) => article.categoryID === subArticleCategory) {
                //     return <select>
                        
                //     </select>
                // }
                } })}></input>
                <select value={articleCategory} onChange={(e) => setArticleCategory(e.target.value) }>
                    {
                        categories.map(category => {
                            return <option value={category._id}>{category.name}</option>;
                        })
                    }
                </select>
                {articleCategory ? <select value={subArticleToArticle} onChange={(e) => setSubArticleToArticle(e.target.value)}>
                    {
                        

                    }
                </select>  : null}
                <label>Contenu de l'article</label>
                <Editor
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    EditorState={EditorState}
                    onEditorStateChange={handleEditorChange}
                />
                <input type="submit" value="Publier"></input>
            </form>
        </div>
    );
}
