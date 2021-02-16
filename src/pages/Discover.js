import API from "../utils/API";

import React, { Component } from 'react'

export default class Discover extends Component {
    state = {
        image_src: "",
        like: 0,
        previousLike: false
    };

    componentDidMount() {
        this.renderPups()
    }
    renderPups = () => {
        API.getRandomImage()
            .then(res => this.setState({ image_src: res.data.message }))
            .catch(err => console.log(err));

    };

    registerLikes = () => {
        if (Math.floor(Math.random() * 5) + 1 > 4) {
            this.setState({
                like: this.state.like + 1,
                previousLike: true
            })
        }
    }

    thumbsUp = () => {
        this.registerLikes()
        this.renderPups()
        this.setState({ previousLike: false })
    }

    thumbsDown = () => {
        this.renderPups()
        this.setState({ previousLike: false })
    }

    renderFlash = () => {
        if (this.state.previousLike) {
            return <h2>Yay you got a new best friend!</h2>
        }
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <h1>Make New Best Friends</h1>
                    <h3>Thumbs up on any pups you want to meet!</h3>
                    <figure>
                        <img src={this.state.image_src} alt="random Pup" className="rounded img-thumbnail" />
                        <br />
                        <button onClick={this.thumbsUp}>Thumbs Up</button>
                        <button onClick={this.thumbsDown}>Thumbs Down </button>
                    </figure>
                    <h2>Made Friends with {this.state.like} pups so far!</h2>
                    {this.renderFlash()}

                </div>
            </div>
        )
    }
}
