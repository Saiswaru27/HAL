// let scene, camera, renderer, controls, currentModel;

// function init() {
//     // Create the scene
//     scene = new THREE.Scene();

//     // Create a camera
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth * 0.8 / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Create a renderer and attach it to the DOM
//     renderer = new THREE.WebGLRenderer('model'+'\'+scene.gltf');
//     renderer.setSize(window.innerWidth * 0.8, window.innerHeight);
//     document.getElementById('gallery').appendChild(renderer.domElement);

//     // Add OrbitControls
//     controls = new THREE.OrbitControls(camera, renderer.domElement);

//     // Add ambient light
//     const ambientLight = new THREE.AmbientLight(0x404040, 2);
//     scene.add(ambientLight);

//     // Add a directional light
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(1, 1, 1).normalize();
//     scene.add(directionalLight);

//     // Handle window resize
//     window.addEventListener('resize', onWindowResize, false);

//     // Load initial model
//     loadModel('cube');

//     // Add event listeners for model thumbnails
//     document.querySelectorAll('.model-thumbnail').forEach(item => {
//         item.addEventListener('click', event => {
//             loadModel(event.target.getAttribute('data-model'));
//         });
//     });
// }

// function loadModel(modelName) {
//     // Remove current model
//     if (currentModel) {
//         scene.remove(currentModel);
//     }

//     // Load new model based on modelName
//     const geometry = modelName === 'cube' ? new THREE.BoxGeometry() : new THREE.SphereGeometry();
//     const material = new THREE.MeshPhongMaterial({ color: modelName === 'cube' ? 0x00ff00 : 0x0000ff });
//     currentModel = new THREE.Mesh(geometry, material);
//     scene.add(currentModel);
// }

// function onWindowResize() {
//     camera.aspect = window.innerWidth * 0.8 / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth * 0.8, window.innerHeight);
// }

// function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// }

// init();
// animate();

