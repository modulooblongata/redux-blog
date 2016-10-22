import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class NewPost extends Component {
  static contextTypes = {
    router: PropTypes.object
    //defining context type for react-router
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        //blog post has been created. Navigate user to the index
        //by calling this.context.router. push with the new path (in this case the index page)
        this.context.router.push('/');
      })
  }

  render() {
    const { fields: {title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`} >
         <label>Title</label>
         <input type="text" className="form-control" {...title} />
         <div className="text-help form-control-label">
          {title.touched ? title.error : ''}
         </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
         <label>Categories</label>
         <input type="text" className="form-control" {...categories} />
         <div className="text-help form-control-label">
          {categories.touched ? categories.error : ''}
         </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
         <label>Content</label>
         <textarea className="form-control" {...content}  />
         <div className="text-help form-control-label">
          {content.touched ? content.error : ''}
         </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate (values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must enter a username';
  }

  if (!values.categories) {
    errors.categories = 'You must enter categories';
  }

  if (!values.content) {
    errors.content = 'You must enter content';
  }

  return errors;
}

// connect: first argument is mapStateToProps
// second is mapDispatchtoProps
// reduxForm: first argument is form config
// second is mapStateToProps
// third is mapDispatchtoProps

export default reduxForm({
  form: 'NewPostForm',
  fields: ['title', 'categories', 'content'], validate
}, null, { createPost })(NewPost);
