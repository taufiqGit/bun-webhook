console.log("Hello via Bun cakala!");
Bun.serve({
    port: 3003,
    routes: {
      "/api/webhook/api": {
        POST: async (req: { json: () => any; }) => {
          const body = await req.json();
          return Response.json({ created: true, ...body });
        },
        GET: ()=>{
          return Response.json({ msg: "micin" })
        }
      }
    },
    async fetch(req: Request) {
        try {
          const url = new URL(req.url);
          const path = url.pathname;
          
          console.log(`${req.method} ${path}`); // Debug log
          
          if (path === "/api/webhook/rp") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook");
              console.log(req.headers, "iki headers e");
              
              
              return Response.json({ code: 401, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/po") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook PO");
              console.log(req.headers, "iki headers e PO");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/pur") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook PUR");
              console.log(req.headers, "iki headers e PUR");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/pur-inv") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook PUR INV");
              console.log(req.headers, "iki headers e PUR INV");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/pur-pay") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook PUR PAY");
              console.log(req.headers, "iki headers e PUR PAY");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/pur-ret") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook PUR RET");
              console.log(req.headers, "iki headers e PUR RET");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/pur-cor") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook PUR COR");
              console.log(req.headers, "iki headers e PUR COR");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/so") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook SO");
              console.log(req.headers, "iki headers e SO");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/sales") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook Sales");
              console.log(req.headers, "iki headers e Sales");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/sales-inv") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook Sales Inv");
              console.log(req.headers, "iki headers e Sales Inv");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/sales-pay") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook Sales Pay");
              console.log(req.headers, "iki headers e Sales Pay");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/sales-ret") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook Sales Ret");
              console.log(req.headers, "iki headers e Sales Ret");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/sales-cor") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook Sales Cor");
              console.log(req.headers, "iki headers e Sales Cor");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/mutasi") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook Mutasi");
              console.log(req.headers, "iki headers e  Mutasi");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/cor-stock") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook koreksi Persediaan");
              console.log(req.headers, "iki headers e koreksi Persediaan");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/akun") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook akun");
              console.log(req.headers, "iki headers e akun");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/produk") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook Produk");
              console.log(req.headers, "iki headers e Produk");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/supplier") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook Pemasok");
              console.log(req.headers, "iki headers e Pemasok");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          } else if (path === "/api/webhook/customer") {
            if (req.method === "POST") {
              const body: any = await req.json();
              console.log(body, "iki data webhook Pelanggan");
              console.log(req.headers, "iki headers e Pelanggan");
              return Response.json({ code: 201, created: true, ...body });
            }
            
            if (req.method === "GET") {
              return Response.json({ msg: "micin" });
            }
          }
          
          return new Response("Not Found", { status: 404 });
        } catch (error) {
          console.error("Error:", error);
          return new Response("Internal Server Error", { status: 500 });
        }
      }
      ,
  });
  