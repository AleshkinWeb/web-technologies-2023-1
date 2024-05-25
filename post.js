export class Post {
    #el = null;
    #postEl = null;
    #commentEl = null;
    #getPost = null;
    #renderPost = null;
    #post = null;
    #getComments = null;
    #renderComment = null;


    constructor(el, commentEl, options) {
        const { renderPost, getPost, getComments, renderComment } = options;
        this.#el = el;
        this.#commentEl = commentEl;
        this.#renderPost = renderPost;
        this.#getPost = getPost;
        this.#getComments = getComments;
        this.#renderComment = renderComment;
        this.#post = this.getPost();
        this.#postEl = el.querySelector('.post-items');
    }

    init () {
        window.onpopstate = () => {
            const url = new URL(window.location.href);
            const post = +url.searchParams.get('id');

            if (post !== this.#post) {
                this.setPost(post);
                this.loadPost();
                this.loadComment();
            }
        };

        this.loadPost();
        this.loadComment();
    }

    getPost () {
        const url = new URL(window.location.href);
        const post = +url.searchParams.get('id');
        return post;
    }

    setPost (post) {
        this.#post = post;
    }

    async loadPost () {
        try {
            const res = await this.#getPost(this.#post);
            this.renderPost(res);

        } catch (error) {
            console.log(error);
        }
    }

    async loadComment () {
        try {
            const res = await this.#getComments(this.#post);
            this.renderComment(res);

        } catch (error) {
            console.log(error);
        }
    }

    renderPost (post) {
        this.#postEl.innerHTML = this.#renderPost(post);
    }

    renderComment (comment) {
        this.#commentEl.innerHTML = this.#renderComment(comment);
    }
}

//////////////

const renderPost = item => `
    <div class="title-post">
        ${item.title}
    </div>
    <div class="content-post">
        ${item.body}
    </div>
    <div class="other-post-info">
        user: ${item.userId}
    </div>
    <div class="other-post-info">
        post: ${item.id}
    </div>
`;

const renderComment = item => {
    let res = ``;
    for(let i = 0; i < item.length; i++) {
        res += `<div class="comment-item">
            <div>email:${item[i].email}</div>
            <div>${item[i].name}</div>
            <div>${item[i].body}</div>
            <div>commentId: ${item[i].id} post: ${item[i].postId}</div>
        </div>`;
    }
    return res;
};

const getPost = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return await res.json();
    }
    catch(err) {
        console.log(err);
    }
};

const getComments = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return await res.json();
    }
    catch(err) {
        console.log(err);
    }
};

const init = () => {
    const post = document.getElementById('post');
    const comment = document.querySelector('.comments-post');
    new Post(post, comment, { 
        renderPost: renderPost,
        getPost: getPost,
        getComments: getComments,
        renderComment: renderComment
     }).init()
}

/////////////

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}