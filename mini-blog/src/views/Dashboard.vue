<template>
  <div class="dashboard">
    <NavAdmin />
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12">
          <div class="row add-area text-start">
            <div class="col-10">
              <div class="text">
                <h2>Add New Package</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia iste accusantium error qui? Reiciendis accusamus
                  dignissimos amet delectus, eaque sed reprehenderit id
                  blanditiis, ad non eligendi modi tempora ullam! Repellat.
                </p>
              </div>
            </div>
            <div class="col-2 d-flex justify-content-end align-items-center">
              <div class="icon-add">
                <i class="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 p-0">
          <div class="control">
            <div class="text text-start">
              <h2>All Package</h2>
              <p>
                Lorem ipsum is simply dummy text of printing and typesetting
              </p>
            </div>
            <div class="table-control">
              <ul class="title-control">
                <li style="width: 25%"><h5>Host</h5></li>
                <li style="width: 10%"><h5>Location</h5></li>
                <li style="width: 15%"><h5>Package Name</h5></li>
                <li style="width: 5%"><h5>Type</h5></li>
                <li style="width: 10%"><h5>Duration</h5></li>
                <li style="width: 10%"><h5>Phone</h5></li>
                <li style="width: 25%"><h5>Email</h5></li>
              </ul>
              <ul class="list-user" v-for="item in listUser" :key="item.id">
                <li class="user d-flex">
                  <div class="host d-flex" style="width: 25%">
                    <img
                      src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/221046620_4785155921517385_3847089430760383354_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=-oUM_bRuGXEAX-pLoMK&_nc_ht=scontent.fhan14-1.fna&oh=0c06a8941a8689d54f6533ade47fe409&oe=61291C12"
                      alt=""
                    />
                    <p>Ryan Richart</p>
                  </div>
                  <div class="location" style="width: 10%">Khulna</div>
                  <div class="packagename" style="width: 15%">Sundarbans</div>
                  <div class="type" style="width: 5%">Group</div>
                  <div class="duration" style="width: 10%">3D 2N</div>
                  <div class="phone" style="width: 10%">(164)224-5824</div>
                  <div class="email" style="width: 22%">
                    truongduyen@gmail.com
                  </div>
                  <div
                    class="edit"
                    style="width: 3%"
                    @click="item.editting=!item.editting"
                  >
                    <i class="fas fa-list"></i>
                    <ul
                      class="edit-area"
                      :style="
                        item.editting ? 'display: block' : 'display: none'
                      "
                    >
                      <li class="edit-item">
                        <p>View</p>
                        <i class="fas fa-eye d-flex align-items-center"></i>
                      </li>
                      <li class="edit-item">
                        <p>Edit</p>
                        <i class="fas fa-edit d-flex align-items-center"></i>
                      </li>
                      <li class="edit-item">
                        <p>Delete</p>
                        <i
                          class="fas fa-trash-alt d-flex align-items-center"
                        ></i>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavAdmin from "../components/NavAdmin.vue";
export default {
  data() {
    return {
      editting: false,
      listUser: [
        {
          id: 1,
          users: {
            thumbnail:
              "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/221046620_4785155921517385_3847089430760383354_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=-oUM_bRuGXEAX-pLoMK&_nc_ht=scontent.fhan14-1.fna&oh=0c06a8941a8689d54f6533ade47fe409&oe=61291C12",
            name: "Ryan Richart",
            location: "Da Nang",
            packname: "VietNam",
            type: "Group",
            duration: "3N2D",
            phone: "0799634056",
            email: "truongduyen@gmail.com",
          },
          editting: false,
        },
        {
          id: 2,
          users: {
            thumbnail:
              "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/221046620_4785155921517385_3847089430760383354_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=-oUM_bRuGXEAX-pLoMK&_nc_ht=scontent.fhan14-1.fna&oh=0c06a8941a8689d54f6533ade47fe409&oe=61291C12",
            name: "Ryan Richart",
            location: "Da Nang",
            packname: "VietNam",
            type: "Group",
            duration: "3N2D",
            phone: "0799634056",
            email: "truongduyen@gmail.com",
          },
          editting: false,
        },
        {
          id: 3,
          users: {
            thumbnail:
              "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/221046620_4785155921517385_3847089430760383354_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=-oUM_bRuGXEAX-pLoMK&_nc_ht=scontent.fhan14-1.fna&oh=0c06a8941a8689d54f6533ade47fe409&oe=61291C12",
            name: "Ryan Richart",
            location: "Da Nang",
            packname: "VietNam",
            type: "Group",
            duration: "3N2D",
            phone: "0799634056",
            email: "truongduyen@gmail.com",
          },
          editting: false,
        },
        {
          id: 4,
          users: {
            thumbnail:
              "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/221046620_4785155921517385_3847089430760383354_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=-oUM_bRuGXEAX-pLoMK&_nc_ht=scontent.fhan14-1.fna&oh=0c06a8941a8689d54f6533ade47fe409&oe=61291C12",
            name: "Ryan Richart",
            location: "Da Nang",
            packname: "VietNam",
            type: "Group",
            duration: "3N2D",
            phone: "0799634056",
            email: "truongduyen@gmail.com",
          },
          editting: false,
        },
        {
          id: 5,
          users: {
            thumbnail:
              "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/221046620_4785155921517385_3847089430760383354_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=-oUM_bRuGXEAX-pLoMK&_nc_ht=scontent.fhan14-1.fna&oh=0c06a8941a8689d54f6533ade47fe409&oe=61291C12",
            name: "Ryan Richart",
            location: "Da Nang",
            packname: "VietNam",
            type: "Group",
            duration: "3N2D",
            phone: "0799634056",
            email: "truongduyen@gmail.com",
          },
          editting: false,
        },
        {
          id: 6,
          users: {
            thumbnail:
              "https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/221046620_4785155921517385_3847089430760383354_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=-oUM_bRuGXEAX-pLoMK&_nc_ht=scontent.fhan14-1.fna&oh=0c06a8941a8689d54f6533ade47fe409&oe=61291C12",
            name: "Ryan Richart",
            location: "Da Nang",
            packname: "VietNam",
            type: "Group",
            duration: "3N2D",
            phone: "0799634056",
            email: "truongduyen@gmail.com",
          },
          editting: false,
        },
      ],
    };
  },
  components: {
    NavAdmin,
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  background: #f0f6fb;
  margin-left: 5rem;
  .add-area {
    background: #fff;
    border-radius: 25px;
    padding: 10px 20px;
    .icon-add {
      padding: 10px 15px;
      border-radius: 50%;
      background: #02c591;
      color: #fff;
      box-shadow: 2px 2px 2px rgb(161, 161, 161);
      cursor: pointer;
    }
  }
  .control {
    border-radius: 25px;
    padding: 10px 20px;
    background: #fff;
    margin-top: 20px;
    .table-control {
      .title-control {
        list-style: none;
        display: flex;
        text-align: left;
        padding-left: 0px;
        padding-bottom: 10px;
        border-bottom: 2px solid #c9cdd3;
      }
      .list-user {
        list-style: none;
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 0px;
        .user {
          width: 100%;
          padding: 10px 0px;
          border-bottom: 1.5px solid #e1e2e4;
          .host {
            img {
              width: 30px;
              height: 30px;
              object-fit: cover;
              border-radius: 50%;
              margin-right: 5px;
            }
            p {
              margin-bottom: 0px !important;
            }
          }
          .edit {
            cursor: pointer;
            position: relative;
            .edit-area {
              position: absolute;
              background: #f0f6fb;
              top: 100%;
              left: -100px;
              display: flex;
              flex-direction: column;
              list-style: none;
              padding: 10px;
              border-radius: 10px;
              display: none;
              transition: 0.5s ease-in-out;
              .edit-item {
                display: flex;
                justify-content: space-between;
                padding: 5px 0px;
                border-bottom: 1.5px solid #e1e2e4;
                margin: 0px;
                width: 100%;
                padding-left: 0px;
                p {
                  padding-top: 0px;
                  padding-right: 20px;
                  font-weight: 500;
                  margin-bottom: 0px !important;
                }
              }
              .select,
              .edit-item:hover {
                color: red;
              }
              .edit-item:nth-last-child(1) {
                border: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>
