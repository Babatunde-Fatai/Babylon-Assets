var createScene = function () {
        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new BABYLON.Scene(engine);
    
        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -20), scene);
        camera.attachControl(canvas, true);
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
    
        // Skybox
            var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
            var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
            skyboxMaterial.backFaceCulling = false;
            skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/stars", scene);
            skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
            skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
            skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
            skybox.material = skyboxMaterial;			
    
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
    
        //setting scene color so as not to use default
        scene.clearColor = new BABYLON.Color3.Black();
        scene.ambientColor = new BABYLON.Color3(0.15, 0.15, 0.15);
    
        // Our built-in 'sphere' shape.
        var Earth = BABYLON.MeshBuilder.CreateIcoSphere("Earth", {diameter: 2, segments: 32}, scene);
    
        // Move the sphere upward 1/2 its height
        Earth.position.y = 1;
        //Earth.material = "red";
    
        //create sphere axis rotation animation
        const AxisAnim = new BABYLON.Animation("AxisRot", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        
        const planetKeys = []; 
    
        //At the animation key 0, the value of rotation.y is 0
        planetKeys.push({
            frame: 0,
            value: 0
        });
    
        //At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation
        planetKeys.push({
            frame: 30,
            value: 2 * Math.PI
        });
    
        //set the keys
        AxisAnim.setKeys(planetKeys);
    
        //Link this animation to the right back wheel
        Earth.animations = [];
        Earth.animations.push(AxisAnim);
    
        //Begin animation - object to animate, first frame, last frame and loop if true
        scene.beginAnimation(Earth, 0, 30, true);
    
        //Sound
        // Load the sound, give it time to load and play it every 3 seconds
       //const bounce = new BABYLON.Sound("bounce", "sounds/bounce.wav", scene);
       //bounce.play();
       //setInterval(() => bounce.play(), 3000);
    
       //particle system
        //const particleSystem = new BABYLON.ParticleSystem("particles", 20000);
        //texture particle
        //particleSystem.particleTexture = new BABYLON.Texture("textures/fire.png");
        
        //particleSystem.emitter = Earth;
        //particleSystem.minEmitBox = new BABYLON.Vector3(-0.2, -0.2, -0.2); // Starting all from
        //particleSystem.maxEmitBox = new BABYLON.Vector3(3, 3, 3); // To...
        //particleSystem.start();
    
    
    
        // Our built-in 'ground' shape.
        //var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
        //ground.position.z = -10;
    
        return scene;
    };

    //Animation
        //create sphere axis rotation animation
        const AxisAnim = new BABYLON.Animation("AxisRot", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        
        const planetKeys = []; 

        //At the animation key 0, the value of rotation.y is 0
        planetKeys.push({
            frame: 0,
            value: 0
        });

        //At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation
        planetKeys.push({
            frame: 30,
            value: 2 * Math.PI
        });

        //set the keys
        AxisAnim.setKeys(planetKeys);

        //Link this animation to the right back wheel
        Moon.animations = [];
        Moon.animations.push(AxisAnim);

        //Begin animation - object to animate, first frame, last frame and loop if true
        scene.beginAnimation(Moon, 0, 30, true);