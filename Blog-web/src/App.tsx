import { IoMdAddCircle } from 'react-icons/io'
import './App.css'
import Navigation from './components/Navigation'
import PeopleToFellow from './components/PeopleToFellow'
import TopicList from './components/TopicList'
import TrendsList from './components/TrendsList'
import { BlogProvider } from './Shared/BlogContext'
import ArticleList from './components/ArticleList'
import Modal from './components/Modal'
import BlogForm from './components/BlogForm'
import { useState } from 'react'


function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  function openModalForNewBlog() {
    setEditingBlog(null)
    setModalOpen(true)
  }

  function openModalForEdit(blog) {
    setEditingBlog(blog)
    setModalOpen(true)
  }
  return (<div>
    <BlogProvider>
      <Navigation />
      <div className="flex justify-center">

        <section className="mx-autop-6">
          <div>
            <button
              onClick={openModalForNewBlog}
              className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
            >
              Add New Blog <IoMdAddCircle className="ml-[.5rem]" />
            </button>
            <ArticleList onEdit={openModalForEdit} />
            {isModalOpen && (
              <Modal onClose={() => setModalOpen(false)} >
                <BlogForm existingBlog={editingBlog} onClose={()=>setModalOpen(false)} />
              </Modal>
            )}
          </div>
        </section>
        <div className='w-[30%]'>
          <PeopleToFellow />
          <TrendsList />
          <TopicList />
        </div>
      </div>
    </BlogProvider>
  </div>)

}

export default App
