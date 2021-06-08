import React from "react";
import Layout from "./content/Layout/Layout";
import ImageGallery from "./content/ImageGallery/ImageGallery";
import { Route, Switch } from "react-router";
import FeaturesSet from "./content/FeaturesSet/FeaturesSet";
import HomePage from "./content/HomePage/HomePage";
import NoFoundElement from "./content/NoFoundElement/NoFoundElement";
import Marvel from "./content/Marvel/Marvel";
import Books from "./content/Books/Books";



class App extends React.Component {
  state = {
  };

  

 
  handleSubmitForm = (data) => {
    console.log(data);
  };

 

  render() {
    return (
      <>
        <Layout>
          <Switch>
            <Route exact path="/" component = {HomePage}/>
            <Route path="/imageGallery" component = {ImageGallery}/>
            <Route path= "/featuresSet" render = {()=><FeaturesSet handleSubmitForm = {this.handleSubmitForm}/>}/>
            <Route path= "/marvel" component = {Marvel} />
            <Route parh = "/books" component = {Books} />
            <Route component = {NoFoundElement}/>
          </Switch>
        </Layout>
        
        
      </>
    );
  }
}

export default App;
