(this.webpackJsonpparticles=this.webpackJsonpparticles||[]).push([[0],{41:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var i=s(9),a=s.n(i),r=s(29),n=s.n(r),o=s(22),l=(s(41),s(61)),c=s(59),d=(s(42),s(43),s(44),s(60)),h=s(56),m=s(57),u=s(58),b=s(55),v=s.p+"static/media/grey-matter.dbf9643d.jpg",f=s.p+"static/media/kame-house.ea3056a4.jpg",p=s.p+"static/media/meeseek.6e331d4b.jpg",g=s.p+"static/media/monster.fb9a032f.jpg",j=s.p+"static/media/psyduck.4ed783e7.jpg",x=s.p+"static/media/victreebel.29f1209c.jpg",w=s(2),M=s(3),y=s(1),O=(s(45),s(35)),k=s(30),T=(s(51),s(52),s(23),s(47),s(5)),P=s(4),S=s(15),C=s(19),B=s(27),z=function(e){Object(T.a)(s,e);var t=Object(P.a)(s);function s(e,i,a,r){var n;Object(w.a)(this,s),(n=t.call(this)).strength=void 0!==i?i:1,n.radius=a,n.threshold=r,n.resolution=void 0!==e?new y.Ab(e.x,e.y):new y.Ab(256,256),n.clearColor=new y.j(0,0,0);var o={minFilter:y.D,magFilter:y.D,format:y.gb};n.renderTargetsHorizontal=[],n.renderTargetsVertical=[],n.nMips=5;var l=Math.round(n.resolution.x/2),c=Math.round(n.resolution.y/2);n.renderTargetBright=new y.Eb(l,c,o),n.renderTargetBright.texture.name="UnrealBloomPass.bright",n.renderTargetBright.texture.generateMipmaps=!1;for(var d=0;d<n.nMips;d++){var h=new y.Eb(l,c,o);h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,n.renderTargetsHorizontal.push(h);var m=new y.Eb(l,c,o);m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,n.renderTargetsVertical.push(m),l=Math.round(l/2),c=Math.round(c/2)}void 0===B.a&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");var u=B.a;n.highPassUniforms=y.zb.clone(u.uniforms),n.highPassUniforms.luminosityThreshold.value=r,n.highPassUniforms.smoothWidth.value=.01,n.materialHighPassFilter=new y.mb({uniforms:n.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,defines:{}}),n.separableBlurMaterials=[];var b=[3,5,7,9,11];l=Math.round(n.resolution.x/2),c=Math.round(n.resolution.y/2);for(var v=0;v<n.nMips;v++)n.separableBlurMaterials.push(n.getSeperableBlurMaterial(b[v])),n.separableBlurMaterials[v].uniforms.texSize.value=new y.Ab(l,c),l=Math.round(l/2),c=Math.round(c/2);n.compositeMaterial=n.getCompositeMaterial(n.nMips),n.compositeMaterial.uniforms.blurTexture1.value=n.renderTargetsVertical[0].texture,n.compositeMaterial.uniforms.blurTexture2.value=n.renderTargetsVertical[1].texture,n.compositeMaterial.uniforms.blurTexture3.value=n.renderTargetsVertical[2].texture,n.compositeMaterial.uniforms.blurTexture4.value=n.renderTargetsVertical[3].texture,n.compositeMaterial.uniforms.blurTexture5.value=n.renderTargetsVertical[4].texture,n.compositeMaterial.uniforms.bloomStrength.value=i,n.compositeMaterial.uniforms.bloomRadius.value=.1,n.compositeMaterial.needsUpdate=!0;n.compositeMaterial.uniforms.bloomFactors.value=[1,.8,.6,.4,.2],n.bloomTintColors=[new y.Bb(1,1,1),new y.Bb(1,1,1),new y.Bb(1,1,1),new y.Bb(1,1,1),new y.Bb(1,1,1)],n.compositeMaterial.uniforms.bloomTintColors.value=n.bloomTintColors,void 0===C.a&&console.error("THREE.UnrealBloomPass relies on CopyShader");var f=C.a;return n.copyUniforms=y.zb.clone(f.uniforms),n.copyUniforms.opacity.value=1,n.materialCopy=new y.mb({uniforms:n.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:y.a,depthTest:!1,depthWrite:!1,transparent:!0}),n.enabled=!0,n.needsSwap=!1,n._oldClearColor=new y.j,n.oldClearAlpha=1,n.basic=new y.O,n.fsQuad=new S.a(null),n}return Object(M.a)(s,[{key:"dispose",value:function(){for(var e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(var t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose()}},{key:"setSize",value:function(e,t){var s=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(s,i);for(var a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(s,i),this.renderTargetsVertical[a].setSize(s,i),this.separableBlurMaterials[a].uniforms.texSize.value=new y.Ab(s,i),s=Math.round(s/2),i=Math.round(i/2)}},{key:"render",value:function(e,t,i,a,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();var n=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);for(var o=this.renderTargetBright,l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=n}},{key:"getSeperableBlurMaterial",value:function(e){return new y.mb({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new y.Ab(.5,.5)},direction:{value:new y.Ab(.5,.5)}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"#include <common>\n\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\n\t\t\t\tuniform vec2 direction;\n\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\n\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n\t\t\t\t}\n\t\t\t\tvoid main() {\n          vec2 invSize = 1.0 / texSize;          float fSigma = float(SIGMA);          float weightSum = gaussianPdf(0.0, fSigma);          float alphaSum = 0.0;          vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;          for( int i = 1; i < KERNEL_RADIUS; i ++ ) {            float x = float(i);            float w = gaussianPdf(x, fSigma);            vec2 uvOffset = direction * invSize * x;            vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);            vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);            diffuseSum += (sample1.rgb + sample2.rgb) * w;            alphaSum += (sample1.a + sample2.a) * w;            weightSum += 2.0 * w;          }          gl_FragColor = vec4(diffuseSum/weightSum, alphaSum/weightSum);\n        }"})}},{key:"getCompositeMaterial",value:function(e){return new y.mb({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:"varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",fragmentShader:"varying vec2 vUv;\n\t\t\t\tuniform sampler2D blurTexture1;\n\t\t\t\tuniform sampler2D blurTexture2;\n\t\t\t\tuniform sampler2D blurTexture3;\n\t\t\t\tuniform sampler2D blurTexture4;\n\t\t\t\tuniform sampler2D blurTexture5;\n\t\t\t\tuniform sampler2D dirtTexture;\n\t\t\t\tuniform float bloomStrength;\n\t\t\t\tuniform float bloomRadius;\n\t\t\t\tuniform float bloomFactors[NUM_MIPS];\n\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\n\t\t\t\tfloat lerpBloomFactor(const in float factor) {\n\t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\n\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\n\t\t\t\t}\n\t\t\t\tvoid main() {\n\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +\n\t\t\t\t\t\tlerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\n\t\t\t\t}"})}}]),s}(S.b);z.BlurDirectionX=new y.Ab(1,0),z.BlurDirectionY=new y.Ab(0,1);s(50);var N=new(function(){function e(){Object(w.a)(this,e),this.bind(),this.mousePos={x:0,y:0},this.params={intensity:.004,ease:.08}}return Object(M.a)(e,[{key:"init",value:function(e){this.camera=e,this.initZ=this.camera.position.z,window.addEventListener("mousemove",this.onMouseMove)}},{key:"onMouseMove",value:function(e){this.mousePos.x=(e.clientX-window.innerWidth/2)*this.params.intensity,this.mousePos.y=(e.clientY-window.innerHeight/2)*this.params.intensity;this.mousePos.y<-3.4&&(this.mousePos.y=-3.4)}},{key:"update",value:function(){this.camera.position.x+=(this.mousePos.x-this.camera.position.x)*this.params.ease,this.camera.position.y+=(this.mousePos.y-this.camera.position.y)*this.params.ease,this.camera.position.z+=(this.initZ-this.camera.position.z)*this.params.ease,this.camera.lookAt(0,0,0)}},{key:"bind",value:function(){this.onMouseMove=this.onMouseMove.bind(this)}}]),e}()),D=s(25),_=s(31),U=s(32),R=function(){function e(t){Object(w.a)(this,e),this.name=t.meshName,this.file=t.file,this.scene=t.scene,this.groupObjects=t.group,this.loadOnStart=t.loadOnStart,this.particleIntensity=t.particleIntensity,this.color1=t.color1,this.color2=t.color2,this.isAdd=!1,this.currentIndex=0,this.myIndex=t.myIndex,this.numParticles=t.numParticles,this.scaleDK=t.scaleDK,this.scaleMB=t.scaleMB,this.rotateOnEntry=t.rotateOnEntry,this.loadingManager=t.loadingManager,this.loader=new _.a(this.loadingManager),this.init()}return Object(M.a)(e,[{key:"init",value:function(){var e=this;this.bind(),this.loader.load(this.file,(function(t){e.material=new y.O({color:16711680,wireframe:!0,blending:y.a}),e.mesh=null,e.geometry=null,t.scene.traverse((function(t){t.name==e.name&&(e.mesh=t,e.mesh.material=e.material),y.N})),e.mesh.scale.set(2.4,2.4,2.4),e.particlesMaterial=new y.cb({color:"red",size:.01}),e.geometry=e.mesh.geometry;var s=new U.a(e.mesh).build();e.particlesGeometry=new y.g;for(var i=new Float32Array(3*e.numParticles),a=new Float32Array(3*e.numParticles),r=0;r<e.numParticles;r++){var n=new y.Bb;s.sample(n),i.set([n.x,n.y,n.z],3*r),a.set([2*Math.random()-1,2*Math.random()-1,2*Math.random()-1],3*r)}e.particlesGeometry.setAttribute("position",new y.f(i,3)),e.particlesGeometry.setAttribute("aRandom",new y.f(a,3)),e.particlesShader=new y.mb({uniforms:{uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uTime:{value:0},uIntensity:{value:e.particleIntensity},uColor1:{value:e.color1},uColor2:{value:e.color2},uScale:{value:0},uSMultiplier:{value:13}},vertexShader:"\n\n  attribute vec3 aRandom;\n  uniform float uPixelRatio;\n  uniform float uTime;\n  uniform float uIntensity;\n  uniform float uScale;\n  uniform float uSMultiplier;\n  varying vec2 vUv;\n  varying vec3 vPosition;\n\n\n  void main() {\n\n    vUv = uv;\n    vPosition = position;\n\n    vec3 pos = position;\n\n    pos.x += sin(uTime * aRandom.x) * uIntensity;\n    pos.y += sin(uTime * aRandom.y) * uIntensity;\n    pos.z += sin(uTime * aRandom.z) * uIntensity;\n\n    pos.x *= uScale +( 3. * sin(pos.y * 4. + uTime) * (1. - uScale));\n    pos.y *= uScale +( 3. * cos(pos.z * 4. + uTime) * (1. - uScale));\n    pos.z *= uScale +( 3. * sin(pos.x * 4. + uTime) * (1. - uScale));\n\n    pos *= uScale; \n\n    vec4 mvPosition = modelViewMatrix * vec4( pos, 1.0 );\n    gl_Position = projectionMatrix * mvPosition;\n    gl_PointSize = uPixelRatio * uSMultiplier / -mvPosition.z;\n  }\n\n",fragmentShader:"\n\n  uniform vec3 uColor1;\n  uniform vec3 uColor2;\n  varying vec2 vUv;\n  varying vec3 vPosition;\n\n  void main() {\n\n    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n    float strength = 0.05 / distanceToCenter - 0.1;\n\n    vec3 color1 = vec3(1.0, 0.0, 0.0);\n    vec3 color2 = vec3(0.0, 0.0, 1.0);\n\n    float depthX = vPosition.x * 0.5 + 0.5;\n    float depthY = vPosition.y * 0.5 + 0.5;\n\n    vec3 finalColorX = mix(uColor1, uColor2, depthX);\n    vec3 finalColorY = mix(uColor1, uColor2, depthY);\n\n    vec3 finalColor = mix(finalColorX, finalColorY, 0.5);\n\n    gl_FragColor = vec4(finalColor, strength);\n  }\n",transparent:!0,blending:y.a,depthWrite:!1,depthTest:!1}),e.particles=new y.bb(e.particlesGeometry,e.particlesShader),e.particles.name=e.name,e.particles.scale.set(e.scaleDK,e.scaleDK,e.scaleDK),e.loadOnStart&&e.addModel(),window.addEventListener("resize",e.resizeCanvas)}))}},{key:"addModel",value:function(){window.innerWidth;this.groupObjects.push(this.particles),this.scene.add(this.particles),this.rotateOnEntry||D.a.fromTo(this.particles.rotation,{y:Math.PI},{y:0,duration:1.2,ease:"power3.out"}),this.isAdd=!0,this.resizeCanvas(),D.a.fromTo(this.particlesShader.uniforms.uScale,{value:0},{value:1,duration:1,ease:"power3.out"})}},{key:"removeModel",value:function(){var e=this;this.groupObjects.pop(),this.isAdd&&D.a.to(this.particlesShader.uniforms.uScale,{value:0,duration:1,ease:"power3.out",onComplete:function(){e.currentIndex!=e.myIndex&&(e.scene.remove(e.particles),e.isAdd=!1)}})}},{key:"resizeCanvas",value:function(){var e=window.innerWidth;this.isAdd&&(e<1026?(this.particles.scale.set(this.scaleMB,this.scaleMB,this.scaleMB),this.particlesShader.uniforms.uSMultiplier.value=9):(this.particles.scale.set(this.scaleDK,this.scaleDK,this.scaleDK),this.particlesShader.uniforms.uSMultiplier.value=13))}},{key:"update",value:function(e,t){this.currentIndex=t,this.isAdd&&(this.particlesShader.uniforms.uTime.value=e)}},{key:"bind",value:function(){this.resizeCanvas=this.resizeCanvas.bind(this)}}]),e}(),A=s.p+"static/media/greyMatter.488ce535.glb",F=s.p+"static/media/mrMeesek.9d1dc03d.glb",I=s.p+"static/media/monster.2f935aa5.glb",E=s.p+"static/media/psyduck.3c256480.glb",H=s.p+"static/media/victreebel.aa2176ed.glb",V=s.p+"static/media/kameHouse.ac94f21e.glb",K=new(function(){function e(){Object(w.a)(this,e),this.bind(),this.camera=0,this.scene=0,this.renderer=0,this.clock=new y.i,this.isPlane=!1,this.isLoaded=!1,this.index=0}return Object(M.a)(e,[{key:"init",value:function(e,t,s){var i=this;this.scene=new y.lb,this.loadingManager=new y.I((function(){window.setTimeout((function(){t.classList.add("loaded")}),1500)}),(function(e,t,i){var a=t/i;s.style.transform="scaleX(".concat(a,")")})),this.camera=new y.Z(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,0,5),N.init(this.camera),this.mousePos=new y.Ab,this.raycaster=new y.ib,this.groupObjects=[],this.currentIntersect=null,window.addEventListener("mousemove",(function(e){i.mousePos.x=e.clientX/window.innerWidth*2-1,i.mousePos.y=-e.clientY/window.innerHeight*2+1,i.raycaster.setFromCamera(i.mousePos,i.camera),i.raycaster.intersectObjects(i.groupObjects).length?document.body.style.cursor="pointer":document.body.style.cursor="auto"})),e.addEventListener("click",(function(e){i.mousePos.x=e.clientX/window.innerWidth*2-1,i.mousePos.y=-e.clientY/window.innerHeight*2+1,i.raycaster.setFromCamera(i.mousePos,i.camera);var t=i.raycaster.intersectObjects(i.groupObjects);if(t.length){var s=t[0].object.name;"GM_Body"===s?window.open("https://sketchfab.com/3d-models/materia-gris-c3f551011aaf4e7fb36a3d4e7912b5d3","_blank").focus():"Kame_House"===s?window.open("https://sketchfab.com/3d-models/kame-house-f2ae2e0f7827499cb64b40f267a82cd5","_blank").focus():"Meesek_Body"===s?window.open("https://sketchfab.com/3d-models/mr-meeseks-356fca081a514508bf8d344ec1515d3f","_blank").focus():"Monster_Body"===s?window.open("https://sketchfab.com/3d-models/cartoon-monster-677110104468442f9f4ba23b3469eec0","_blank").focus():"Psy_Body"===s?window.open("https://sketchfab.com/3d-models/psyduck-6bd718edee504a26922000c546a455a9","_blank").focus():"VC_Body"===s&&window.open("https://sketchfab.com/3d-models/victreebel-1164197623f84bb4ad5004a5911722f8","_blank").focus()}})),this.renderer=new y.Fb({antialias:!0,alpha:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=y.Y,this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=y.Gb,this.renderer.toneMapping=y.jb,this.renderer.toneMappingExposure=1.5,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(0,0);var a=null;a=1===this.renderer.getPixelRatio()&&this.renderer.capabilities.isWebGL2?y.Db:y.Eb,this.renderTarget=new a(800,600,{minFilter:y.D,magFilter:y.D,format:y.gb,encoding:y.Gb,alpha:!0}),this.effectComposer=new O.a(this.renderer,this.renderTarget),this.effectComposer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.effectComposer.setSize(window.innerWidth,window.innerHeight),this.renderPass=new k.a(this.scene,this.camera),this.effectComposer.addPass(this.renderPass),this.unrealBloomPass=new z,this.unrealBloomPass.enabled=!0,this.effectComposer.addPass(this.unrealBloomPass),window.innerWidth<768?this.unrealBloomPass.strength=.2:this.unrealBloomPass.strength=2,this.unrealBloomPass.radius=.6,this.unrealBloomPass.threshold=0,this.material=new y.O({color:16711680,wireframe:!0}),this.geometry=new y.e(1,1,1,20,20,20),this.plane=new y.N(this.geometry,this.material),this.isPlane=!0,window.addEventListener("resize",this.resizeCanvas),this.addObjects(),this.time=0,e.appendChild(this.renderer.domElement),this.update()}},{key:"testFunction",value:function(){this.isPlane}},{key:"addObjects",value:function(){this.greyMatter=new R({meshName:"GM_Body",file:A,scene:this.scene,group:this.groupObjects,loadOnStart:!0,particleIntensity:.025,color1:new y.j("#00f328"),color2:new y.j("#678293"),myIndex:0,numParticles:16e4,scaleDK:2.2,scaleMB:1.5,loadingManager:this.loadingManager}),this.kameHouse=new R({meshName:"Kame_House",file:V,scene:this.scene,group:this.groupObjects,particleIntensity:.025,color1:new y.j("#0071f9"),color2:new y.j("#efc5e9"),myIndex:1,numParticles:4e5,scaleDK:1.9,scaleMB:1.2,rotateOnEntry:!0,loadingManager:this.loadingManager}),this.mrMeesek=new R({meshName:"Meesek_Body",file:F,scene:this.scene,group:this.groupObjects,particleIntensity:.015,color1:new y.j("#3c02e1"),color2:new y.j("#00a2ab"),myIndex:2,numParticles:14e4,scaleDK:2.2,scaleMB:1.5,loadingManager:this.loadingManager}),this.monster=new R({meshName:"Monster_Body",file:I,scene:this.scene,group:this.groupObjects,particleIntensity:.025,color1:new y.j("#FF69B4"),color2:new y.j("#00d4b8"),myIndex:3,numParticles:16e4,scaleDK:2.2,scaleMB:1.4,loadingManager:this.loadingManager}),this.psyduck=new R({meshName:"Psy_Body",file:E,scene:this.scene,group:this.groupObjects,particleIntensity:.035,color1:new y.j("#ad00bd"),color2:new y.j("#fff23a"),myIndex:4,numParticles:16e4,scaleDK:2.2,scaleMB:1.4,loadingManager:this.loadingManager}),this.victrebeel=new R({meshName:"VC_Body",file:H,scene:this.scene,group:this.groupObjects,particleIntensity:.05,color1:new y.j("#499403"),color2:new y.j("#f1e900"),myIndex:5,numParticles:16e4,scaleDK:2.2,scaleMB:1.3,loadingManager:this.loadingManager}),this.isLoaded=!0}},{key:"changeSlider",value:function(e){if(this.index=e,this.isLoaded)switch(e){case 0:window.innerWidth<768?this.unrealBloomPass.strength=.2:this.unrealBloomPass.strength=2,this.unrealBloomPass.radius=.6,this.kameHouse.removeModel(),this.mrMeesek.removeModel(),this.monster.removeModel(),this.psyduck.removeModel(),this.victrebeel.removeModel(),this.greyMatter.addModel();break;case 1:window.innerWidth<768?this.unrealBloomPass.strength=.2:this.unrealBloomPass.strength=2,this.unrealBloomPass.radius=.6,this.greyMatter.removeModel(),this.mrMeesek.removeModel(),this.monster.removeModel(),this.psyduck.removeModel(),this.victrebeel.removeModel(),this.kameHouse.addModel();break;case 2:window.innerWidth<768?this.unrealBloomPass.strength=.2:this.unrealBloomPass.strength=2,this.unrealBloomPass.radius=.6,this.greyMatter.removeModel(),this.kameHouse.removeModel(),this.monster.removeModel(),this.psyduck.removeModel(),this.victrebeel.removeModel(),this.mrMeesek.addModel();break;case 3:window.innerWidth<768?this.unrealBloomPass.strength=.2:this.unrealBloomPass.strength=2.3,this.unrealBloomPass.radius=.6,this.greyMatter.removeModel(),this.kameHouse.removeModel(),this.mrMeesek.removeModel(),this.psyduck.removeModel(),this.victrebeel.removeModel(),this.monster.addModel();break;case 4:window.innerWidth<768?this.unrealBloomPass.strength=.35:this.unrealBloomPass.strength=3.5,this.unrealBloomPass.radius=.1,this.greyMatter.removeModel(),this.kameHouse.removeModel(),this.mrMeesek.removeModel(),this.monster.removeModel(),this.victrebeel.removeModel(),this.psyduck.addModel();break;case 5:window.innerWidth<768?this.unrealBloomPass.strength=.2:this.unrealBloomPass.strength=3.5,this.unrealBloomPass.radius=.1,this.greyMatter.removeModel(),this.kameHouse.removeModel(),this.mrMeesek.removeModel(),this.monster.removeModel(),this.psyduck.removeModel(),this.victrebeel.addModel()}}},{key:"update",value:function(){requestAnimationFrame(this.update.bind(this)),this.time=this.clock.getElapsedTime(),this.greyMatter.update(this.time,this.index),this.kameHouse.update(this.time,this.index),this.mrMeesek.update(this.time,this.index),this.monster.update(this.time,this.index),this.psyduck.update(this.time,this.index),this.victrebeel.update(this.time,this.index),N.update(),this.effectComposer.render()}},{key:"resizeCanvas",value:function(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.effectComposer.setSize(window.innerWidth,window.innerHeight)}},{key:"bind",value:function(){this.resizeCanvas=this.resizeCanvas.bind(this),this.update=this.update.bind(this),this.init=this.init.bind(this),this.testFunction=this.testFunction.bind(this),this.addObjects=this.addObjects.bind(this)}}]),e}()),W=s(17),G=s(28),L=s(34),Q=s(33),X=s(6);var Y=function(){d.a.use([b.a,h.a]);var e=Object(i.useRef)(null),t=Object(i.useRef)(null),s=Object(i.useRef)(null),a=Object(i.useRef)(null),r=Object(i.useRef)(null);Object(i.useEffect)((function(){K.init(e.current,t.current,s.current)}),[]);var n=Object(i.useState)("GM"),w=Object(o.a)(n,2),M=w[0],y=w[1],O=Object(i.useState)(!1),k=Object(o.a)(O,2),T=k[0],P=k[1];return Object(X.jsxs)("div",{className:"App",children:[Object(X.jsxs)("div",{ref:t,className:"loader-container",children:[Object(X.jsx)("h2",{children:"Loading..."}),Object(X.jsx)("h4",{children:"Loading all the assets "}),Object(X.jsx)("div",{className:"loading-bar",children:Object(X.jsx)("div",{ref:s,className:"bar"})})]}),Object(X.jsx)("div",{ref:e,className:"canvas-container"}),Object(X.jsxs)("div",{className:T?"menu-mobile  active ".concat(M):"menu-mobile ".concat(M),children:[Object(X.jsxs)("div",{className:"menu-item",children:[Object(X.jsx)(W.d,{className:"icon",size:"1.4rem"}),Object(X.jsxs)("a",{href:"https://www.linkedin.com/in/andres-salaz/",target:"_blank",children:["Linkedin"," "]})]}),Object(X.jsxs)("div",{className:"menu-item",children:[Object(X.jsx)(W.a,{className:"icon",size:"1.4rem"}),Object(X.jsxs)("a",{href:"https://www.artstation.com/elsalaz",target:"_blank",children:["Artstation"," "]})]}),Object(X.jsxs)("div",{className:"menu-item",children:[Object(X.jsx)(W.b,{className:"icon",size:"1.4rem"}),Object(X.jsxs)("a",{href:"https://github.com/devSalaz",target:"_blank",children:["Github"," "]})]}),Object(X.jsxs)("div",{className:"menu-item",children:[Object(X.jsx)(W.c,{className:"icon",size:"1.4rem"}),Object(X.jsx)("a",{href:"https://www.instagram.com/el.salaz/",target:"_blank",children:"Instagram"})]})]}),Object(X.jsxs)("main",{className:M,children:[Object(X.jsxs)("nav",{children:[Object(X.jsx)("h3",{children:"devAndres"}),T?Object(X.jsx)(Q.a,{size:"1.4rem",className:"menu-icon",onClick:function(){return P(!T)}}):Object(X.jsx)(L.a,{size:"1.4rem",className:"menu-icon",onClick:function(){return P(!T)}}),Object(X.jsxs)("ul",{children:[Object(X.jsx)("li",{children:Object(X.jsx)("a",{href:"https://www.linkedin.com/in/andres-salaz/",target:"_blank",children:Object(X.jsx)(W.d,{size:"1.4rem",className:"nav-icon ".concat(M)})})}),Object(X.jsx)("li",{children:Object(X.jsx)("a",{href:"https://www.artstation.com/elsalaz",target:"_blank",children:Object(X.jsx)(W.a,{size:"1.4rem",className:"nav-icon ".concat(M)})})}),Object(X.jsx)("li",{children:Object(X.jsx)("a",{href:"https://github.com/devSalaz",target:"_blank",children:Object(X.jsx)(W.b,{size:"1.4rem",className:"nav-icon ".concat(M)})})}),Object(X.jsx)("li",{children:Object(X.jsx)("a",{href:"https://www.instagram.com/el.salaz/",target:"_blank",children:Object(X.jsx)(W.c,{size:"1.4rem",className:"nav-icon ".concat(M)})})})]})]}),Object(X.jsxs)("section",{children:[Object(X.jsxs)("div",{className:"absolute-container",children:[Object(X.jsxs)("div",{className:"GM"===M?"content-model active":"content-model",children:[Object(X.jsx)("h2",{children:"Grey Matter"}),Object(X.jsxs)("h4",{children:["3D model of Grey Matter from Ben 10. This model was made in maya, was made for a project in the University. Can be used in Unity or any Game Engine, the rigging is from Mixamo. Watch in"," ",Object(X.jsx)("span",{children:Object(X.jsx)("a",{className:"link GM",href:"https://www.artstation.com/artwork/mDDvrE",target:"_blank",children:"Arstation."})}),Object(X.jsx)("br",{}),Object(X.jsx)("br",{}),"-Tris: 14.8k",Object(X.jsx)("br",{}),"-Vertices: 7.5k"]})]}),Object(X.jsxs)("div",{className:"KM"===M?"content-model active":"content-model",children:[Object(X.jsx)("h2",{children:"Kame House"}),Object(X.jsxs)("h4",{children:["3D model Kame House from Dragon Ball. This model was made in maya, was made for a personal rendering project. Can be used in Unity or any Game Engine. Watch in"," ",Object(X.jsx)("span",{children:Object(X.jsx)("a",{className:"link KM",href:"https://www.artstation.com/artwork/Xn1kwY",target:"_blank",children:"Arstation."})}),Object(X.jsx)("br",{}),Object(X.jsx)("br",{}),"-Tris: 40.4k",Object(X.jsx)("br",{}),"-Vertices: 23.1k"]})]}),Object(X.jsxs)("div",{className:"MK"===M?"content-model active":"content-model",children:[Object(X.jsx)("h2",{children:"Mr Meesek"}),Object(X.jsxs)("h4",{children:["3D model of Mr Meeseks from Rick and Morty. This model was made in maya, was made for a personal AR project. Can be used in Unity or any Game Engine but is too high poly, the rigging is from Mixamo. Watch in"," ",Object(X.jsx)("span",{children:Object(X.jsx)("a",{className:"link MK",href:"https://www.artstation.com/artwork/QrrwRd",target:"_blank",children:"Arstation."})}),Object(X.jsx)("br",{}),Object(X.jsx)("br",{}),"-Tris: 84.5k",Object(X.jsx)("br",{}),"-Vertices: 42.6k"]})]}),Object(X.jsxs)("div",{className:"MO"===M?"content-model active":"content-model",children:[Object(X.jsx)("h2",{children:"Pink Monster"}),Object(X.jsxs)("h4",{children:["3D model of Monster concept found on internet. This model was made in maya, was made for a personal Rendering project. Can be used in Unity or any Game Engine. Watch in"," ",Object(X.jsx)("span",{children:Object(X.jsx)("a",{className:"link MO",href:"https://www.artstation.com/artwork/AqqlZ5",target:"_blank",children:"Arstation."})}),Object(X.jsx)("br",{}),Object(X.jsx)("br",{}),"-Tris: 83.5k",Object(X.jsx)("br",{}),"-Vertices: 41.9k"]})]}),Object(X.jsxs)("div",{className:"PS"===M?"content-model active":"content-model",children:[Object(X.jsx)("h2",{children:"Psyduck"}),Object(X.jsxs)("h4",{children:["3D model of Psyduck from Pokemon. This model was made in maya, was made for a personal Rendering and web project. Watch in"," ",Object(X.jsx)("span",{children:Object(X.jsx)("a",{className:"link PS",href:"https://www.artstation.com/artwork/ZGGdKm",target:"_blank",children:"Arstation."})}),Object(X.jsx)("br",{}),Object(X.jsx)("br",{}),"-Tris: 147.3k",Object(X.jsx)("br",{}),"-Vertices: 73.7k"]})]}),Object(X.jsxs)("div",{className:"VC"===M?"content-model active":"content-model",children:[Object(X.jsx)("h2",{children:"Victreebel"}),Object(X.jsxs)("h4",{children:["3D model of Victreebel from Pokemon. This model was made in maya, was made for a personal Rendering project. Can be used in Unity or any Game Engine. Watch in"," ",Object(X.jsx)("span",{children:Object(X.jsx)("a",{className:"link VC",href:"https://www.artstation.com/artwork/zOOK5L",target:"_blank",children:"Arstation."})}),Object(X.jsx)("br",{}),Object(X.jsx)("br",{}),"-Tris: 11.8k",Object(X.jsx)("br",{}),"-Vertices: 6k"]})]})]}),Object(X.jsxs)("div",{className:"container-bottom",children:[Object(X.jsxs)("h4",{children:["Coding by"," ",Object(X.jsx)("span",{children:Object(X.jsx)("a",{className:"coding-text ".concat(M),href:"https://www.linkedin.com/in/andres-salaz/",target:"_blank",children:"Andr\xe9s Salazar"})})]}),Object(X.jsxs)("div",{className:"slider-container",children:[Object(X.jsx)("div",{ref:a,className:"slide-left ".concat(M),children:Object(X.jsx)(G.a,{size:"1.6rem",className:"icon-slider ".concat(M)})}),Object(X.jsxs)("div",{ref:r,className:"slide-right ".concat(M),children:[" ",Object(X.jsx)(G.b,{size:"1.6rem",className:"icon-slider ".concat(M)})]}),Object(X.jsxs)(l.a,{modules:[h.a,m.a,b.a,u.a],spaceBetween:0,slidesPerView:"auto",navigation:{prevEl:a.current,nextEl:r.current},onBeforeInit:function(e){e.params.navigation.prevEl=a.current,e.params.navigation.nextEl=r.current},effect:"coverflow",centeredSlides:!0,loop:!0,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!1},onSlideChange:function(e){return function(e){switch(K.testFunction(),e){case 0:y("GM");break;case 1:y("KM");break;case 2:y("MK");break;case 3:y("MO");break;case 4:y("PS");break;case 5:y("VC")}K.changeSlider(e)}(e.realIndex)},children:[Object(X.jsx)(c.a,{children:Object(X.jsx)("img",{className:"img-slide",src:v,alt:"grey-matter"})}),Object(X.jsx)(c.a,{children:Object(X.jsx)("img",{className:"img-slide",src:f,alt:"kame-house"})}),Object(X.jsx)(c.a,{children:Object(X.jsx)("img",{className:"img-slide",src:p,alt:"meeseek"})}),Object(X.jsx)(c.a,{children:Object(X.jsx)("img",{className:"img-slide",src:g,alt:"monster"})}),Object(X.jsx)(c.a,{children:Object(X.jsx)("img",{className:"img-slide",src:j,alt:"psyduck"})}),Object(X.jsx)(c.a,{children:Object(X.jsx)("img",{className:"img-slide",src:x,alt:"victreebel"})})]})]})]})]})]})]})},Z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,62)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),i(e),a(e),r(e),n(e)}))};n.a.render(Object(X.jsx)(a.a.StrictMode,{children:Object(X.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[49,1,2]]]);
//# sourceMappingURL=main.7b120668.chunk.js.map