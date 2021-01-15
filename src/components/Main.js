import React, { Component } from 'react';
import {getYoutubeContentMain} from '../functions/getYoutubeContent.js';
import Videos from './Videos'
import Error from './Error'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: {},
            error: null
        }
    }

    
    componentDidMount(){
        //Youtube Endpoint
        //axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&order=viewCount&q=ReactJS%20Tutorial&key=' + process.env.REACT_APP_YOUTUBE_API_KEY)
        getYoutubeContentMain(this,'./test.json')
    }

    componentDidUpdate(prevProps){
        if(prevProps.urlSearch !== this.props.urlSearch){
            //Youtube Endpoint
            //axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q=ReactJS%20Tutorial%20'+this.props.urlSearch+'&key=' + process.env.REACT_APP_YOUTUBE_API_KEY)
            getYoutubeContentMain(this,'./test2.json')
        }
    }

    render() { 
        const vidArr = this.state.data.items;
        if(this.state.isLoaded){
            return (
                <div className="container-fluid Main">
                    <div className="row">
                        {vidArr.slice(0,3).map((i) => <Videos videoItem = {i} key ={i.etag}/>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(3,6).map((i) => <Videos videoItem = {i} key ={i.etag}/>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(6,9).map((i) => <Videos videoItem = {i} key ={i.etag}/>)}
                    </div>
                    <div className="row">
                        {vidArr.slice(9,12).map((i) => <Videos videoItem = {i} key ={i.etag}/>)}
                    </div>
                </div>
            );
        } else if(this.state.error){
            return (   
                <Error error={this.state.error.message} />
            );
        } else{
            return (
                <div className="container">test</div> );
        }
    }
}
 
export default Main;