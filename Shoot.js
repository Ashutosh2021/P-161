AFRAME.registerComponent("ball",{
    init:function(){
        this.shootBall()
    },

    shootBall:function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key === "z"){
                const ballEl= document.createElement("a-entity")
                ballEl.setAttribute("geometry",{
                    primitive:"sphere",
                    radius:0.5
                })
                ballEl.setAttribute("material",{color:"black"})

                var camera = document.querySelector("#camera")
                var pos = camera.getAttribute("position")

                ballEl.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })

                var direction= new THREE.Vector3()
                var cam = document.querySelector("#camera").object3D
                cam.getWorldDirection(direction)

                ballEl.setAttribute("velocity",direction.multiplyScalar(-10))

                var scene = document.querySelector("#scene")
                scene.appendChild(ballEl)
            }
        })
    }
})