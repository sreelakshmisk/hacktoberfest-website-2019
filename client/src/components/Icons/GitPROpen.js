import React from 'react';

const GitPROpenIcon = props => {
    return (
        <svg height="1em" width="1em" {...props}>
            <path d="M704 722V320c0-96-96-192-192-192h-64V0L256 192l192 192V256h64c32 0 64 32 64 64v402c-38 22-64 63-64 110 0 71 57 128 128 128s128-57 128-128c0-47-26-88-64-110zm-64 174c-35 0-64-29-64-64s29-64 64-64 64 29 64 64-29 64-64 64zM128 64C57 64 0 121 0 192c0 47 26 88 64 110v419C26 743 0 784 0 831c0 71 57 128 128 128s128-57 128-128c0-47-26-88-64-110V302c38-22 64-63 64-110 0-71-57-128-128-128zm0 832c-35 0-64-29-64-64s29-64 64-64 64 29 64 64-29 64-64 64zm0-640c-35 0-64-29-64-64s29-64 64-64 64 29 64 64-29 64-64 64z" />
        </svg>
    );
};

export default GitPROpenIcon;