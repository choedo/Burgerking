import React, { useEffect, useState } from 'react'

import "./search.css";

const { kakao } = window

const MapContainer = ({ searchPlace }) => {

  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([]);
  
  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    var markers = [];
    const container = document.getElementById('myMap');
    const options = {
      center: new kakao.maps.LatLng(37.56607167176915, 126.97757717400873),
      level: 1
    }
    const map = new kakao.maps.Map(container, options);

    // 마커 이미지 변경
    var imageSrc = 'data:image/png;base64,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'; // 마커 이미지 주소
    var imageSize = new kakao.maps.Size(58, 80); // 마커 이미지 크기
    let imageOption = {offset: new kakao.maps.Point(27, 69)};

    // 마커 이미지정보를 가지고 있는 마커 이미지 생성
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination);
        setPlaces(data);
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      var paginationEl = document.getElementById('pagination'),
          fragment = document.createDocumentFragment(), i;

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a');
        el.href = '#';
        el.innerHTML = i;

        if (i === pagination.current) {
          el.className = 'on';
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            }
          })(i)
        }

        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: markerImage
      });

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div style="padding: 12px; font-size: 14px; font-weight: 700;">' + place.place_name + '</div>');
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace]);

  return (
    <div className='mapCon'>
      <div id="myMap"></div>
      <div id="result-list">
        {Places.map((item, i) => (
          <div className='resultBox' key={i} style={{ marginTop: '20px' }}>
            <div>
              <h5 className='placeName'>{item.place_name}</h5>
              {item.road_address_name ? 
              (
                <div>
                  <span className='placeAddressName'>{item.road_address_name}</span>
                  <span className='placeAddress'>{item.address_name}</span>
                </div>
              ) 
              : 
              (
                <span className='placeAddressName'>{item.address_name}</span>
              )
              }
              <span className='placePhone'>{item.phone}</span>
            </div>
          </div>
        ))}
        <div id="pagination"></div>
      </div>
    </div>
  )
}

export default MapContainer