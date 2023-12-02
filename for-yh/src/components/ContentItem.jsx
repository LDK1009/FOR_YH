import React from 'react';

const ContentItem = ([title, text]) => {
    return (
        <>
            <li>
                {title}
            <div>
                {text}
            </div>    
            </li>   
        </>
    );
};

export default ContentItem;