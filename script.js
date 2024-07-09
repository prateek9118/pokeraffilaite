const myGlobe = Globe()
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
  .htmlElementsData([
    { lat: 40.730610, lng: -73.935242, name: "Poker Room 1", deal: "20% off on first buy-in" },
    { lat: 34.052235, lng: -118.243683, name: "Poker Room 2", deal: "Free entry to weekend tournaments" },
    { lat: 51.507351, lng: -0.127758, name: "Poker Room 3", deal: "15% cashback on losses" },
    { lat: 48.856613, lng: 2.352222, name: "Poker Room 4", deal: "10% extra chips on first deposit" },
    { lat: 35.689487, lng: 139.691711, name: "Poker Room 5", deal: "50% off tournament fees" },
    { lat: -33.868820, lng: 151.209296, name: "Poker Room 6", deal: "Free entry to cash games" },
    { lat: 19.432608, lng: -99.133209, name: "Poker Room 7", deal: "Double rewards points" }
  ])
  .htmlElement((d) => {
    const el = document.createElement('div');
    el.innerHTML = `<div style="color: orange; font-size: 14px; text-align: center;">
      <b>${d.name}</b><br>${d.deal}
    </div>`;
    el.style.fontSize = '12px';
    el.style.padding = '2px';
    el.style.borderRadius = '3px';
    el.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    el.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    return el;
  })
  (document.getElementById('globeViz'));

// Position the camera
const camera = myGlobe.camera();
camera.position.z = 300; // Increase this value to zoom out

// Add controls
const controls = myGlobe.controls();
controls.enableZoom = false; // Disable zoom to allow normal page scrolling
controls.enableRotate = true;

// Handle window resize
window.addEventListener('resize', () => {
  myGlobe.width([window.innerWidth]);
  myGlobe.height([window.innerHeight]);
});

// Add lighting to make the markers more visible
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 3, 5);
myGlobe.scene().add(light);

const ambientLight = new THREE.AmbientLight(0x404040);
myGlobe.scene().add(ambientLight);
