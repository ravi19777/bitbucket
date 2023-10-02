const Footer = () =>
{
    return(
        <div className="w-full bg-sub-header-color text-white p-8 font-poppins">
        <div className="md:flex">
            <div className="md:w-1/5">
                <h3 className="text-lg mb-4">LIVE EVENTS</h3>
                <ul className="space-y-2 text-footer-secondary-text-color">
                    <li className="hover:text-header-color">
                        <a href="">Bhagwat Gita</a>
                    </li>
                    <li className="hover:text-header-color">
                        <a href="">Sant Sarita</a>
                    </li>
                    <li className="hover:text-header-color">
                        <a href="">Ashtavakra Samhita</a>
                    </li>
                    <li className="hover:text-header-color">
                        <a href="">Bodh Pratyusha</a>
                    </li>
                </ul>
            </div>

            <div className="md:w-1/5">
                    <h4 className="text-lg mb-4 mt-6 md:mt-0">WISDOM CONTENT</h4>
                <ul className="space-y-2 text-footer-secondary-text-color">
                    <li className="hover:text-header-color">
                        <a href="">Video Series</a>
                    </li>
                    <li className="hover:text-header-color">
                        <a href="">AP Books</a>
                    </li>
                    <li className="hover:text-header-color">
                        <a href="">AP Articles</a>
                    </li>
                    <li className="hover:text-header-color">
                        <a href="">Ap Circle</a>
                    </li>
                </ul>
            </div>

            <div className="md:w-1/5">
                    <h4 className="text-lg mb-4 mt-6 md:mt-0">MORE</h4>
                <ul className="space-y-2 text-footer-secondary-text-color">
                    <li className="hover:text-header-color">
                        <a href="">About Acharya Prashant</a>
                    </li>
                    <li className="hover:text-header-color">
                        <a href="">Invite Him</a>
                    </li>
                    <li className="hover:text-header-color">
                        <a href="">Interview Him</a>
                    </li>
                    <li className="hover:text-header-color">
                        <a href="">Ghar Ghar Upanishad</a>
                    </li>
                    <li className="hover:text-header-color">
                        <a href="">Media and Public Interaction</a>
                    </li>
                </ul>
            </div>

            <div className="w-full md:w-1/5">
                    <h4 className="text-lg mb-4 mt-6 md:mt-0">SOCIAL MEDIA</h4>
                <ul className=" text-footer-secondary-text-color space-y-3">
                    <li>
                        <p className="">For English</p>
                    

                    <div>
                        <span>
                            <a href="">
                                <i className="fa fa-youtube-play mr-2 hover:text-header-color" aria-hidden="true"></i>
                            </a>
                            <a href="" className="mx-2">
                                <i className="fa fa-twitter hover:text-header-color" aria-hidden="true"></i>
                            </a>
                            <a href="" className="mx-2">
                                <i className="fa fa-facebook hover:text-header-color" aria-hidden="true"></i>
                            </a>
                            <a href="" className="mx-2">
                                <i className="fa fa-instagram hover:text-header-color" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-wikipedia-w hover:text-header-color" aria-hidden="true"></i>
                            </a>
                        </span>
                    </div>

                    </li>

                    <li>
                        <span className="w-full my-4">For Hindi</span>

                        <div>
                            <span>
                                <a href="" className="mr-2 hover:text-header-color">
                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                </a>
                                <a href="" className="mx-2 hover:text-header-color">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a href="" className="mx-2 hover:text-header-color">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                                <a href="" className="mx-2 hover:text-header-color">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                                <a href="" className="hover:text-header-color">
                                    <i className="fa fa-wikipedia-w" aria-hidden="true"></i>
                                </a>
                            </span>
                    </div>
                    </li>
                </ul>
            </div>

            <div className="mt-4 md:mt-0 mb-6 text-white md:w-1/5">
                <p>DOWNLOAD ACHARYA PRASHANT APP</p>
                <div className="hidden">
                    <img src="" alt="" />
                    <span className="hidden">Acharya Prashant</span>
                </div>

                <div className="flex my-4 md:block">
                    <img src="https://acharyaprashant.org/images/ic_googleplay.png" alt="" className="w-atuo h-10 mr-4 md:mb-4 md:border-[1px] md:border-white md:rounded md:p-[1px]" />
                    <img src="https://acharyaprashant.org/images/ic_appstore.png" alt="" className="w-atuo h-10 md:mb-4 md:border-[1px] md:border-white md:rounded md:p-[1px]" />
                </div>
            </div>

            <div className="border-b-[1px] border-gray-300 pb-4  md:border-none">
                <span>CONTACT US</span>
                <ul className="space-y-2">
                    <li className="text-footer-secondary-text-color hover:text-header-color">
                        <a href="" className="space-x-4 md:space-x-[5px]">
                            <i className="fa fa-envelope-o"></i>
                            <span>support@advait.org.in</span>
                        </a>
                    </li>

                    <li className="text-gray-400 hover:text-header-color">
                        <a href="" className="space-x-4 md:space-x-[5px]">
                            <i className="fa fa-whatsapp"></i>
                            <span>+91 9650585100</span>
                        </a>
                    </li>

                    <li className="text-gray-400 hover:text-header-color">
                        <a href="" className="space-x-4 md:space-x-[5px]">
                            <i className="fa fa-phone"></i>
                            <span>+91 9650585100</span>
                        </a>
                    </li>

                    <li>
                        <button className="border-[1px] border-white px-20 py-1 rounded text-sm hover:text-header-color hover:border-header-color md:px-10">Fill Form to Connect</button>
                    </li>
                </ul>
            </div>
        </div>

        <div className="mt-3 text-sm text-footer-secondary-text-color md:flex md:align-middle md:justify-center md:border-t-[1px] md:border-white md:pt-4 md:w-3/5 md:mx-auto">
            <span className="block mb-2 md:mr-8">copyright &#169; 2022 PrashantAdvait Foundation</span>
            <span className="h-fit pt-0 mt-0">
                <span className="border-r-[2px] border-gray-400 pr-4">
                    Terms & Conditions
                </span>
                <span className="ml-4">
                    Privacy Policy
                </span>
            </span>
        </div>

        </div>
    )
};

export default Footer;