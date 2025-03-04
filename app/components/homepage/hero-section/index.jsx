"use client";
// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hi, <br />
            This is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link>
            <Link
              href={personalData.instagram}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaInstagramSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] h-[500px]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-y-auto h-[400px] border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">class</span>
                <span className="mr-2 text-green-400">PortfolioController</span>
                <span className="mr-2 text-pink-500">extends</span>
                <span className="text-blue-400">Controller</span>
              </div>
              <div className="text-gray-400">{`{`}</div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-pink-500">public function</span>
                <span className="text-blue-400">index</span>
                <span className="text-gray-400">()</span>
              </div>
              <div className="text-gray-400 ml-4 lg:ml-8">{`{`}</div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-pink-500">$coder</span>
                <span className="text-white">{'=>'}</span>
                <span className="text-gray-400">{` [`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-white">&quot;name&quot;</span>
                <span className="text-white">{'=>'}</span>
                <span className="text-amber-300">&quot;Dix Vaghela&quot;</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-white">&quot;skills&quot;</span>
                <span className="text-white">{'=>'}</span>
                <span className="text-gray-400">{` [`}</span>
              </div>

              {/* Skills with Progress Bars */}
              <div className="ml-16 lg:ml-32 space-y-1.5 max-h-[280px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
                <div className="flex items-center">
                  <span className="text-white w-32">&quot;HTML&quot;</span>
                  <span className="text-white">{'=>'}</span>
                  <div className="ml-2 bg-gray-700 h-2 w-48 rounded-full">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="ml-2 text-amber-300">&quot;Expert&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white w-32">&quot;CSS&quot;</span>
                  <span className="text-white">{'=>'}</span>
                  <div className="ml-2 bg-gray-700 h-2 w-48 rounded-full">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <span className="ml-2 text-amber-300">&quot;Expert&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white w-32">&quot;JavaScript&quot;</span>
                  <span className="text-white">{'=>'}</span>
                  <div className="ml-2 bg-gray-700 h-2 w-48 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <span className="ml-2 text-amber-300">&quot;Advance&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white w-32">&quot;Bootstrap&quot;</span>
                  <span className="text-white">{'=>'}</span>
                  <div className="ml-2 bg-gray-700 h-2 w-48 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <span className="ml-2 text-amber-300">&quot;Advance&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                
                <div className="flex items-center">
                  <span className="text-white w-32">&quot;CorelDRAW&quot;</span>
                  <span className="text-white">{'=>'}</span>
                  <div className="ml-2 bg-gray-700 h-2 w-48 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <span className="ml-2 text-amber-300">&quot;Advance&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white w-32">&quot;PHP&quot;</span>
                  <span className="text-white">{'=>'}</span>
                  <div className="ml-2 bg-gray-700 h-2 w-48 rounded-full">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="ml-2 text-amber-300">&quot;Expert&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white w-32">&quot;ASP.NET MVC&quot;</span>
                  <span className="text-white">{'=>'}</span>
                  <div className="ml-2 bg-gray-700 h-2 w-48 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <span className="ml-2 text-amber-300">&quot;Advance&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white w-32">&quot;Laravel&quot;</span>
                  <span className="text-white">{'=>'}</span>
                  <div className="ml-2 bg-gray-700 h-2 w-48 rounded-full">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                  <span className="ml-2 text-amber-300">&quot;Medium&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white w-32">&quot;WordPress&quot;</span>
                  <span className="text-white">{'=>'}</span>
                  <div className="ml-2 bg-gray-700 h-2 w-48 rounded-full">
                    <div className="bg-yellow-400 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                  <span className="ml-2 text-amber-300">&quot;Medium&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white w-32">&quot;Shopify&quot;</span>
                  <span className="text-white">{'=>'}</span>
                  <div className="ml-2 bg-gray-700 h-2 w-48 rounded-full">
                    <div className="bg-blue-400 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                  <span className="ml-2 text-amber-300">&quot;Advance&quot;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="flex items-center">
                  <span className="text-white w-32">&quot;Database&quot;</span>
                  <span className="text-white">{'=>'}</span>
                  <span className="ml-2 text-gray-400">['</span>
                  <span className="text-amber-300">SQL Server, Xampp, ADO.NET</span>
                  <span className="text-gray-400">'],</span>
                </div>
              </div>

              <div className="ml-12 lg:ml-24 text-gray-400">{`],`}</div>
              <div>
                <span className="ml-12 lg:ml-24 text-white">&quot;hardWorker&quot;</span>
                <span className="text-white">{'=>'}</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-white">&quot;quickLearner&quot;</span>
                <span className="text-white">{'=>'}</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-white">&quot;problemSolver&quot;</span>
                <span className="text-white">{'=>'}</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div className="ml-8 lg:ml-16 text-gray-400">{`];`}</div>
              
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-pink-500">return</span>
                <span className="text-blue-400">view</span>
                <span className="text-gray-400">(</span>
                <span className="text-amber-300">&quot;portfolio&quot;</span>
                <span className="text-gray-400">,</span>
                <span className="text-blue-400"> compact</span>
                <span className="text-gray-400">(</span>
                <span className="text-amber-300">&quot;coder&quot;</span>
                <span className="text-gray-400">));</span>
              </div>
              <div className="ml-4 lg:ml-8 text-gray-400">{`}`}</div>
              <div className="text-gray-400">{`}`}</div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;