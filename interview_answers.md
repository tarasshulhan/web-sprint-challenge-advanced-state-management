# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
    
    Context API helps avoid a lot of boilerplate code required for redux state management.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions help connect the ui and the reducer, the reducer modifies the state based on the previous state and the input, and the store holds the state.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

    Lets us do async functions like api calls in actions.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
    
    Definitely context api because it was much easier to understand and use quickly.