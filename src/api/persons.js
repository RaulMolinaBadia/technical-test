import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const usePersonsAPI = (apiURL) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setPost(response.data);
            console.log(post.results);
        });
    }, [apiURL]);

    return post;
};
