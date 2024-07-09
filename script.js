const myGlobe = Globe()
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
  .pointsData([
    { lat: 40.730610, lng: -73.935242, size: 0.1, color: 'orange', name: "Poker Room 1", deal: "20% off on first buy-in" },
    { lat: 34.052235, lng: -118.243683, size: 0.1, color: 'orange', name: "Poker Room 2", deal: "Free entry to weekend tournaments" },
    { lat: 51.507351, lng: -0.127758, size: 0.1, color: 'orange', name: "Poker Room 3", deal: "15% cashback on losses" }
  ])
  .pointAltitude('size')
  .pointColor('color')
  .pointLabel(({ name, deal }) => `
    <div style="color: orange;">
      <b>${name}</b><br>${deal}
    </div>
  `)
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
