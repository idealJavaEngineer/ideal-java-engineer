import React from 'react';
import './RoadMapPage.css';

const RoadMapPage = () => {

  const roadMapSample = {
    name : "first RoadMap",
    descr: "this is the first roadmap",
    chapters : 10,
    items : 67,
    completed : 10,
    type : "interview",
    imageUrl : "https://images.unsplash.com/photo-1712073028274-ad36f3543751?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }

  return (
    <div className="roadMaps-page-outer-container"> 
      <div className='type-title'>
          <h1>Essentials</h1>
          <button className='more-buttton'>More</button>
      </div>
      <div className="roadMap-row-container">
        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>


      </div>

      <div className='type-title'>
          <h1>Essentials</h1>
          <button className='more-buttton'>More</button>
      </div>
      <div className="roadMap-row-container">
        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>


      </div>

      <div className='type-title'>
          <h1>Essentials</h1>
          <button className='more-buttton'>More</button>
      </div>
      <div className="roadMap-row-container">
        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>


      </div>

      <div className='type-title'>
          <h1>Essentials</h1>
          <button className='more-buttton'>More</button>
      </div>
      <div className="roadMap-row-container">
        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* card code */}
        <div className="show-case">
          <div className='roadMap-card-base'>
            <div className='roadMap-card'>
                <div className='image-base'>
                  <div className='roadMap-image-position'  style={{ backgroundImage: `url(${roadMapSample.imageUrl})` , backgroundSize: "400px 260px", backgroundPosition: "right center"}} >
                    <div className="card-heading">
                      <div class='roadmap-description'>{roadMapSample.descr}</div>
                      <div className='roadmap-title'>{roadMapSample.name} </div>
                    </div>
                  </div>
                </div>
                <div className='bot-base'>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.chapters}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats'>
                    <div className='big-number'>
                      {roadMapSample.items}
                    </div>
                    <div className='text-label'>
                      Chapters
                    </div>
                  </div>
                  <div className='card-stats color-black'>
                    <div className='big-number font-color-white'>
                      {roadMapSample.completed}%
                    </div>
                    <div className='text-label font-color-white'>
                      Completed
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default RoadMapPage;