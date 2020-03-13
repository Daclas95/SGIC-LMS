import React from 'react'

export default function Home() {
    return (
      <div className="homebg">
      <main role="main">
      <br/>
      <br/>
      <br/>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

<ol class="carousel-indicators">
<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>

<div class="carousel-inner">

<div class="carousel-item active">
<img class="rounded mx-auto d-block imgsize" src={Image} alt=""/>
</div>

<div class="carousel-item">
<img class="rounded mx-auto d-block imgsize" src={Image} alt=""/>
</div>

<div class="carousel-item">
<img class="rounded mx-auto d-block imgsize" src={Image} alt=""/>
</div>

</div>

<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="sr-only">Previous</span>
</a>

<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="sr-only">Next</span>
</a>

</div>
<br/>

<div class="container marketing">

  <div class="row">

    <div class="col-lg-4 justify-content-center">
      <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="" width="140" height="140"/>
      <h2>Heading</h2>
      <p>Donec sed odio du Praesent commodo cursus magna.</p>
      <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
    </div>

    <div class="col-lg-4 justify-content-center">
      <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
      <h2>Heading</h2>
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
      <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
    </div>

    <div class="col-lg-4 justify-content-center">
      <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
      <h2>Heading</h2>
      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
    </div>

  </div>




  <hr class="featurette-divider"/>

  <div class="row featurette">

    <div class="col-md-7">
      <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
      <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
    </div>

    <div class="col-md-5">
      <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
    </div>
  </div>

  <hr class="featurette-divider"/>

  <div class="row featurette">

    <div class="col-md-7 order-md-2">
      <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
      <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
    </div>

    <div class="col-md-5 order-md-1">
      <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
    </div>
  </div>

  <hr class="featurette-divider"/>

  <div class="row featurette">

    <div class="col-md-7">
      <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
      <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
    </div>

    <div class="col-md-5">
      <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="Generic placeholder image"/>
    </div>
  </div>

  <hr class="featurette-divider"/>


</div>


<footer class="container">
  <p class="float-right"><a href="#">Back to top</a></p>
  <p>&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
</footer>

</main>
</div>
    )
}
