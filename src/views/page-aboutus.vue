<template>
    <div>
        <b-container class="py-3">
            <b-row class="mt-5">
                <div class="section">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-3 col-md-4 col-12">
                         
                        </div>
                        <!--end col-->
              
                        <div class="col-lg-12 col-md-12 col-12 mt-5 pt-2 mt-sm-0 pt-sm-0">
                          <div class="row align-items-center">
                            <div class="col-lg-8 col-md-7">
                              <div class="section-title">
                                <h5 class="mb-0">My Announcements</h5>
                                
                              </div>
                            </div>
                            <!--end col-->
              
                            
                            <!--end col-->
                          </div>
                          <!--end row-->
              
                          <div class="row">
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <ul class="label list-unstyled mb-0">
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-danger"
                                      >Not Active</a
                                    >
                                  </li>
                                </ul>
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img src="images/shop/product/s1.jpg" class="img-fluid" alt=""
                                      /></router-link>
                                      <div class="overlay-work">
                                        <div class="py-2 bg-soft-dark rounded-bottom out-stock">
                                          <h6 class="mb-0 text-center">Out of stock</h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Branded T-Shirt</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $16.00 <del class="text-danger ml-2">$21.00</del>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <ul class="label list-unstyled mb-0">
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-primary"
                                      >New</a
                                    >
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-success"
                                      >Featured</a
                                    >
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-warning"
                                      >Sale</a
                                    >
                                  </li>
                                </ul>
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img src="images/shop/product/s2.jpg" class="img-fluid" alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-2.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Shopping Bag</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $21.00 <del class="text-danger ml-2">$25.00</del>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <ul class="label list-unstyled mb-0">
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-warning"
                                      >Sale</a
                                    >
                                  </li>
                                </ul>
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img src="images/shop/product/s3.jpg" class="img-fluid" alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-3.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Elegent Watch</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $5.00 <span class="text-success ml-1">30% off</span>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <ul class="label list-unstyled mb-0">
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-primary"
                                      >New</a
                                    >
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-success"
                                      >Featured</a
                                    >
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-warning"
                                      >Sale</a
                                    >
                                  </li>
                                </ul>
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img src="images/shop/product/s4.jpg" class="img-fluid" alt=""
                                      /></router-link>
                                      <div class="overlay-work">
                                        <div class="py-2 bg-soft-dark rounded-bottom out-stock">
                                          <h6 class="mb-0 text-center">Out of stock</h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Casual Shoes</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $18.00 <del class="text-danger ml-2">$22.00</del>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img src="images/shop/product/s5.jpg" class="img-fluid" alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-5.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Earphones</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">$3.00</h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img src="images/shop/product/s6.jpg" class="img-fluid" alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-6.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Elegent Mug</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $4.50 <del class="text-danger ml-2">$6.50</del>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img src="images/shop/product/s7.jpg" class="img-fluid" alt=""
                                      /></router-link>
                                      <div class="overlay-work">
                                        <div class="py-2 bg-soft-dark rounded-bottom out-stock">
                                          <h6 class="mb-0 text-center">Out of stock</h6>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Sony Headphones</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $9.99 <span class="text-success ml-2">20% off</span>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <ul class="label list-unstyled mb-0">
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-warning"
                                      >Sale</a
                                    >
                                  </li>
                                </ul>
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img src="images/shop/product/s8.jpg" class="img-fluid" alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-8.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Wooden Stools</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $22.00 <del class="text-danger ml-2">$25.00</del>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img src="images/shop/product/s9.jpg" class="img-fluid" alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-9.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Coffee Cup / Mug</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $16.00 <del class="text-danger ml-2">$21.00</del>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <ul class="label list-unstyled mb-0">
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-primary"
                                      >New</a
                                    >
                                  </li>
                                </ul>
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img
                                          src="images/shop/product/s10.jpg"
                                          class="img-fluid"
                                          alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-10.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Sunglasses</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $21.00 <del class="text-danger ml-2">$25.00</del>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img
                                          src="images/shop/product/s11.jpg"
                                          class="img-fluid"
                                          alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-11.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Loafer Shoes</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $5.00 <span class="text-success ml-1">30% off</span>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img
                                          src="images/shop/product/s12.jpg"
                                          class="img-fluid"
                                          alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-12.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >T-Shirts</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $18.00 <del class="text-danger ml-2">$22.00</del>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img
                                          src="images/shop/product/s13.jpg"
                                          class="img-fluid"
                                          alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-13.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Wooden Chair</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $16.00 <del class="text-danger ml-2">$21.00</del>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <ul class="label list-unstyled mb-0">
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-primary"
                                      >New</a
                                    >
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-success"
                                      >Featured</a
                                    >
                                  </li>
                                  <li>
                                    <a href="javascript:void(0)" class="badge badge-pill badge-warning"
                                      >Sale</a
                                    >
                                  </li>
                                </ul>
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img
                                          src="images/shop/product/s14.jpg"
                                          class="img-fluid"
                                          alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-14.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >Women Block Heels</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $21.00 <del class="text-danger ml-2">$25.00</del>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <div class="col-12 mt-4 pt-2">
                              <div class="card shop-list border-0 shadow position-relative">
                                <div class="row align-items-center no-gutters">
                                  <div class="col-lg-4 col-md-6">
                                    <div class="shop-image position-relative overflow-hidden">
                                      <router-link tag="a" to="/shop-product-detail"
                                        ><img
                                          src="images/shop/product/s15.jpg"
                                          class="img-fluid"
                                          alt=""
                                      /></router-link>
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="overlay-work"
                                      >
                                        <img
                                          src="images/shop/product/s-15.jpg"
                                          class="img-fluid"
                                          alt=""
                                        />
                                      </router-link>
                                    </div>
                                  </div>
                                  <!--end col-->
              
                                  <div class="col-lg-8 col-md-6">
                                    <div class="card-body content p-4">
                                      <router-link
                                        tag="a"
                                        to="/shop-product-detail"
                                        class="text-dark product-name h6"
                                        >T-Shirts</router-link
                                      >
                                      <div class="d-lg-flex align-items-center mt-2 mb-3">
                                        <h6 class="text-muted small font-italic mb-0 mr-3">
                                          $5.00 <span class="text-success ml-1">30% off</span>
                                        </h6>
                                        <ul class="list-unstyled text-warning mb-0">
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                          <li class="list-inline-item">
                                            <i class="mdi mdi-star"></i>
                                          </li>
                                        </ul>
                                      </div>
                                      <p class="para-desc text-muted mb-1">
                                        This is required when, for example, the final text is not yet
                                        available. Dummy text is also known as 'fill text'.
                                      </p>
                                      <ul class="list-unstyled mb-0">
                                        <li class="list-inline-item">
                                          <a
                                            href="javascript:void(0)"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><heart-icon class="icons"></heart-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <a
                                            href="javascript:void(0)"
                                            data-toggle="modal"
                                            data-target="#productview"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><eye-icon class="icons"></eye-icon
                                          ></a>
                                        </li>
                                        <li class="mt-2 list-inline-item ml-1">
                                          <router-link
                                            tag="a"
                                            to="/shop-cart"
                                            class="btn btn-icon btn-pills btn-soft-primary"
                                            ><shopping-cart-icon class="icons"></shopping-cart-icon
                                          ></router-link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <!--end col-->
                                </div>
                                <!--end row-->
                              </div>
                              <!--end blog post-->
                            </div>
                            <!--end col-->
              
                            <!-- PAGINATION START -->
                            <div class="col-12 mt-4 pt-2">
                              <ul class="pagination justify-content-center mb-0">
                                <li class="page-item">
                                  <a class="page-link" href="javascript:void(0)" aria-label="Previous"
                                    ><i class="mdi mdi-arrow-left"></i> Prev</a
                                  >
                                </li>
                                <li class="page-item active">
                                  <a class="page-link" href="javascript:void(0)">1</a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="javascript:void(0)">2</a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="javascript:void(0)">3</a>
                                </li>
                                <li class="page-item">
                                  <a class="page-link" href="javascript:void(0)" aria-label="Next"
                                    >Next <i class="mdi mdi-arrow-right"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <!--end col-->
                            <!-- PAGINATION END -->
                          </div>
                          <!--end row-->
                        </div>
                        <!--end col-->
                      </div>
                      <!--end row-->
                    </div>
                    <!--end container-->
                  </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checked:false
            }
        },
        methods: {
            doAnyThing(){
                alert('hello bitheeeee')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>