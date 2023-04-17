<script>
import {
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon,
  GitlabIcon,
  MailIcon,
  UserPlusIcon,
  UsersIcon,
  MessageCircleIcon,
  BellIcon,
  ToolIcon,
  UserIcon,
  KeyIcon,
  PhoneIcon,
  BookmarkIcon,
  UserCheckIcon,
  GlobeIcon,
} from "vue-feather-icons";

import Navbar from "@/components/navbar";
import Switcher from "@/components/switcher";
import Footer from "@/components/footer";

/**
 * Account-setting component
 */
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Switcher,
    Footer,
    ArrowUpIcon,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
    YoutubeIcon,
    GitlabIcon,
    InstagramIcon,
    MailIcon,
    UserPlusIcon,
    UsersIcon,
    BellIcon,
    ToolIcon,
    UserIcon,
    KeyIcon,
    PhoneIcon,
    BookmarkIcon,
    MessageCircleIcon,
    UserCheckIcon,
    GlobeIcon,
  },
};
</script>

<template>
  <div>
    <Navbar :nav-light="true" />

    <!-- Hero Start -->
    <section
      class="bg-profile d-table w-100 bg-primary"
      style="background: url('images/account/bg.png') center center"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="card public-profile border-0 rounded shadow"
              style="z-index: 1"
            >
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col-lg-2 col-md-3 text-md-left text-center">
                    <img
                      src="images/client/05.jpg"
                      class="avatar avatar-large rounded-circle shadow d-block mx-auto"
                      alt=""
                    />
                  </div>
                  <!--end col-->

                  <div class="col-lg-10 col-md-9">
                    <div class="row align-items-end">
                      <div
                        class="col-md-7 text-md-left text-center mt-4 mt-sm-0"
                      >
                        <h3 class="title mb-0">Krista Joseph</h3>
                        <small class="text-muted h6 mr-2">Web Developer</small>
                        <ul class="list-inline mb-0 mt-3">
                          <li class="list-inline-item mr-2">
                            <a
                              href="javascript:void(0)"
                              class="text-muted"
                              title="Instagram"
                            >
                              <instagram-icon
                                class="fea icon-sm mr-2"
                              ></instagram-icon
                              >krista_joseph
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a
                              href="javascript:void(0)"
                              class="text-muted"
                              title="Linkedin"
                            >
                              <linkedin-icon
                                class="fea icon-sm mr-2"
                              ></linkedin-icon
                              >Krista Joseph
                            </a>
                          </li>
                        </ul>
                      </div>
                      <!--end col-->
                      <div class="col-md-5 text-md-right text-center">
                        <ul class="list-unstyled social-icon social mb-0 mt-4">
                          <li class="list-inline-item">
                            <a
                              href="javascript:void(0)"
                              class="rounded"
                              v-b-tooltip.hover
                              title="Add Friend"
                            >
                              <user-plus-icon
                                class="fea icon-sm fea-social"
                              ></user-plus-icon>
                            </a>
                          </li>
                          <li class="list-inline-item ml-1">
                            <a
                              href="javascript:void(0)"
                              class="rounded"
                              v-b-tooltip.hover
                              title="Messages"
                            >
                              <message-circle-icon
                                class="fea icon-sm fea-social"
                              ></message-circle-icon>
                            </a>
                          </li>
                          <li class="list-inline-item ml-1">
                            <a
                              href="javascript:void(0)"
                              class="rounded"
                              v-b-tooltip.hover
                              title="Notifications"
                            >
                              <bell-icon
                                class="fea icon-sm fea-social"
                              ></bell-icon>
                            </a>
                          </li>
                          <li class="list-inline-item ml-1">
                            <router-link
                              to="/account-setting"
                              class="rounded"
                              v-b-tooltip.hover
                              title="Settings"
                            >
                              <tool-icon
                                class="fea icon-sm fea-social"
                              ></tool-icon>
                            </router-link>
                          </li>
                        </ul>
                        <!--end icon-->
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--ed container-->
    </section>
    <!--end section-->
    <!-- Hero End -->

    <!-- Profile Start -->
    <section class="section mt-60">
      <div class="container mt-lg-3">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 d-lg-block d-none">
            <div class="sidebar sticky-bar p-4 rounded shadow">
              <div class="widget">
                <h5 class="widget-title">Followers :</h5>
                <div class="row mt-4">
                  <div class="col-6 text-center">
                    <user-plus-icon
                      class="fea icon-ex-md text-primary mb-1"
                    ></user-plus-icon>
                    <h5 class="mb-0">2588</h5>
                    <p class="text-muted mb-0">Followers</p>
                  </div>
                  <!--end col-->

                  <div class="col-6 text-center">
                    <users-icon
                      class="fea icon-ex-md text-primary mb-1"
                    ></users-icon>
                    <h5 class="mb-0">454</h5>
                    <p class="text-muted mb-0">Following</p>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>

              <div class="widget mt-4 pt-2">
                <h5 class="widget-title">Projects :</h5>
                <div class="progress-box mt-4">
                  <h6 class="title text-muted">Progress</h6>
                  <div class="progress">
                    <div
                      class="progress-bar position-relative bg-primary"
                      style="width: 50%"
                    >
                      <div class="progress-value d-block text-muted h6">
                        24 / 48
                      </div>
                    </div>
                  </div>
                </div>
                <!--end process box-->
              </div>

              <div class="widget">
                <div class="row">
                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/account-profile"
                      class="accounts rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted"
                        ><i class="uil uil-dashboard"></i
                      ></span>
                      <h6 class="title text-dark h6 my-0">Profile</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/account-members"
                      class="accounts rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted"
                        ><i class="uil uil-users-alt"></i
                      ></span>
                      <h6 class="title text-dark h6 my-0">Members</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/account-works"
                      class="accounts rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted"
                        ><i class="uil uil-file"></i
                      ></span>
                      <h6 class="title text-dark h6 my-0">Works</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/account-messages"
                      class="accounts rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted"
                        ><i class="uil uil-envelope-star"></i
                      ></span>
                      <h6 class="title text-dark h6 my-0">Messages</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/account-payments"
                      class="accounts rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted"
                        ><i class="uil uil-transaction"></i
                      ></span>
                      <h6 class="title text-dark h6 my-0">Payments</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/account-setting"
                      class="accounts active rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted"
                        ><i class="uil uil-setting"></i
                      ></span>
                      <h6 class="title text-dark h6 my-0">Settings</h6>
                    </router-link>
                  </div>
                  <!--end col-->

                  <div class="col-6 mt-4 pt-2">
                    <router-link
                      to="/auth-login-three"
                      class="accounts rounded d-block shadow text-center py-3"
                    >
                      <span class="pro-icons h3 text-muted"
                        ><i class="uil uil-sign-out-alt"></i
                      ></span>
                      <h6 class="title text-dark h6 my-0">Logout</h6>
                    </router-link>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>

              <div class="widget mt-4 pt-2">
                <h5 class="widget-title">Follow me :</h5>
                <ul class="list-unstyled social-icon mb-0 mt-4">
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded">
                      <facebook-icon
                        class="fea icon-sm fea-social"
                      ></facebook-icon>
                    </a>
                  </li>
                  <li class="list-inline-item ml-1">
                    <a href="javascript:void(0)" class="rounded">
                      <instagram-icon
                        class="fea icon-sm fea-social"
                      ></instagram-icon>
                    </a>
                  </li>
                  <li class="list-inline-item ml-1">
                    <a href="javascript:void(0)" class="rounded">
                      <twitter-icon
                        class="fea icon-sm fea-social"
                      ></twitter-icon>
                    </a>
                  </li>
                  <li class="list-inline-item ml-1">
                    <a href="javascript:void(0)" class="rounded">
                      <linkedin-icon
                        class="fea icon-sm fea-social"
                      ></linkedin-icon>
                    </a>
                  </li>
                  <li class="list-inline-item ml-1">
                    <a href="javascript:void(0)" class="rounded">
                      <github-icon class="fea icon-sm fea-social"></github-icon>
                    </a>
                  </li>
                  <li class="list-inline-item ml-1">
                    <a href="javascript:void(0)" class="rounded">
                      <youtube-icon
                        class="fea icon-sm fea-social"
                      ></youtube-icon>
                    </a>
                  </li>
                  <li class="list-inline-item ml-1">
                    <a href="javascript:void(0)" class="rounded">
                      <gitlab-icon class="fea icon-sm fea-social"></gitlab-icon>
                    </a>
                  </li>
                </ul>
                <!--end icon-->
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-lg-8 col-12">
            <div class="card border-0 rounded shadow">
              <div class="card-body">
                <h5 class="text-md-left text-center">Personal Detail :</h5>

                <div class="mt-3 text-md-left text-center d-sm-flex">
                  <img
                    src="images/client/05.jpg"
                    class="avatar float-md-left avatar-medium rounded-circle shadow mr-md-4"
                    alt=""
                  />

                  <div class="mt-md-4 mt-3 mt-sm-0">
                    <a href="javascript:void(0)" class="btn btn-primary mt-2"
                      >Change Picture</a
                    >
                    <a
                      href="javascript:void(0)"
                      class="btn btn-outline-primary mt-2 ml-2"
                      >Delete</a
                    >
                  </div>
                </div>

                <form>
                  <div class="row mt-4">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>First Name</label>
                        <div class="position-relative">
                          <user-icon class="fea icon-sm icons"></user-icon>
                          <input
                            name="name"
                            id="first"
                            type="text"
                            class="form-control pl-5"
                            placeholder="First Name :"
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <div class="position-relative">
                          <user-check-icon
                            class="fea icon-sm icons"
                          ></user-check-icon>
                          <input
                            name="name"
                            id="last"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Last Name :"
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Your Email</label>
                        <div class="position-relative">
                          <mail-icon class="fea icon-sm icons"></mail-icon>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            class="form-control pl-5"
                            placeholder="Your email :"
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Occupation</label>
                        <div class="position-relative">
                          <bookmark-icon
                            class="fea icon-sm icons"
                          ></bookmark-icon>
                          <input
                            name="name"
                            id="occupation"
                            type="text"
                            class="form-control pl-5"
                            placeholder="Occupation :"
                          />
                        </div>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label>Description</label>
                        <div class="position-relative">
                          <message-circle-icon
                            class="fea icon-sm icons"
                          ></message-circle-icon>
                          <textarea
                            name="comments"
                            id="comments"
                            rows="4"
                            class="form-control pl-5"
                            placeholder="Description :"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--end row-->
                  <div class="row">
                    <div class="col-sm-12">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        class="btn btn-primary"
                        value="Save Changes"
                      />
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </form>
                <!--end form-->

                <div class="row">
                  <div class="col-md-6 mt-4 pt-2">
                    <h5>Contact Info :</h5>

                    <form>
                      <div class="row mt-4">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Phone No. :</label>
                            <div class="position-relative">
                              <phone-icon
                                class="fea icon-sm icons"
                              ></phone-icon>
                              <input
                                name="number"
                                id="number"
                                type="number"
                                class="form-control pl-5"
                                placeholder="Phone :"
                              />
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Website :</label>
                            <div class="position-relative">
                              <globe-icon
                                class="fea icon-sm icons"
                              ></globe-icon>
                              <input
                                name="url"
                                id="url"
                                type="url"
                                class="form-control pl-5"
                                placeholder="Url :"
                              />
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-lg-12 mt-2 mb-0">
                          <button class="btn btn-primary">Add</button>
                        </div>
                        <!--end col-->
                      </div>
                      <!--end row-->
                    </form>
                  </div>
                  <!--end col-->

                  <div class="col-md-6 mt-4 pt-2">
                    <h5>Change password :</h5>
                    <form>
                      <div class="row mt-4">
                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Old password :</label>
                            <div class="position-relative">
                              <key-icon class="fea icon-sm icons"></key-icon>
                              <input
                                type="password"
                                class="form-control pl-5"
                                placeholder="Old password"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>New password :</label>
                            <div class="position-relative">
                              <key-icon class="fea icon-sm icons"></key-icon>
                              <input
                                type="password"
                                class="form-control pl-5"
                                placeholder="New password"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-lg-12">
                          <div class="form-group">
                            <label>Re-type New password :</label>
                            <div class="position-relative">
                              <key-icon class="fea icon-sm icons"></key-icon>
                              <input
                                type="password"
                                class="form-control pl-5"
                                placeholder="Re-type New password"
                                required=""
                              />
                            </div>
                          </div>
                        </div>
                        <!--end col-->

                        <div class="col-lg-12 mt-2 mb-0">
                          <button class="btn btn-primary">Save password</button>
                        </div>
                        <!--end col-->
                      </div>
                      <!--end row-->
                    </form>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </div>
            </div>

            <div class="rounded shadow mt-4">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Account Notifications :</h5>
                            </div>

                            <div class="p-4">
                                <div class="d-flex justify-content-between pb-4">
                                    <h6 class="mb-0">When someone mentions me</h6>
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch1">
                                        <label class="custom-control-label" for="customSwitch1"></label>
                                    </div>
                                </div>
                                <div class="media d-flex justify-content-between py-4 border-top">
                                    <h6 class="mb-0">When someone follows me</h6>
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch2" checked="">
                                        <label class="custom-control-label" for="customSwitch2"></label>
                                    </div>
                                </div>
                                <div class="media d-flex justify-content-between py-4 border-top">
                                    <h6 class="mb-0">When shares my activity</h6>
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch3">
                                        <label class="custom-control-label" for="customSwitch3"></label>
                                    </div>
                                </div>
                                <div class="media d-flex justify-content-between py-4 border-top">
                                    <h6 class="mb-0">When someone messages me</h6>
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch4" checked="">
                                        <label class="custom-control-label" for="customSwitch4"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="rounded shadow mt-4">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0">Marketing Notifications :</h5>
                            </div>

                            <div class="p-4">
                                <div class="media d-flex justify-content-between pb-4">
                                    <h6 class="mb-0">There is a sale or promotion</h6>
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch5" checked="">
                                        <label class="custom-control-label" for="customSwitch5"></label>
                                    </div>
                                </div>
                                <div class="media d-flex justify-content-between py-4 border-top">
                                    <h6 class="mb-0">Company news</h6>
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch6">
                                        <label class="custom-control-label" for="customSwitch6"></label>
                                    </div>
                                </div>
                                <div class="media d-flex justify-content-between py-4 border-top">
                                    <h6 class="mb-0">Weekly jobs</h6>
                                    <div class="custom-control custom-switch"> 
                                        <input type="checkbox" class="custom-control-input" id="customSwitch7">
                                        <label class="custom-control-label" for="customSwitch7"></label>
                                    </div>
                                </div>
                                <div class="media d-flex justify-content-between py-4 border-top">
                                    <h6 class="mb-0">Unsubscribe News</h6>
                                    <div class="custom-control custom-switch">
                                        <input type="checkbox" class="custom-control-input" id="customSwitch8" checked="">
                                        <label class="custom-control-label" for="customSwitch8"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="rounded shadow mt-4">
                            <div class="p-4 border-bottom">
                                <h5 class="mb-0 text-danger">Delete Account :</h5>
                            </div>

                            <div class="p-4">
                                <h6 class="mb-0">Do you want to delete the account? Please press below "Delete" button</h6>
                                <div class="mt-4">
                                    <button class="btn btn-danger">Delete Account</button>
                                </div><!--end col-->
                            </div>
                        </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Profile Setting End -->

    <!--end section-->
    <Footer />
    <!-- Footer End -->
    <Switcher />
    <!-- Back to top -->
    <a
      href="javascript: void(0);"
      class="btn btn-icon btn-primary back-to-top"
      id="back-to-top"
      v-scroll-to="'#topnav'"
    >
      <arrow-up-icon class="icons"></arrow-up-icon>
    </a>
    <!-- Back to top -->
  </div>
</template>
