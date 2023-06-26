import React from 'react'
import RouteBase from './RouteBase'
import { Button } from 'react-daisyui'

function Home() {
  return (

    <RouteBase>
      <div className=" min-h-screen">
        <header className="bg-base-300 ">
          <div className="container mx-auto py-4 px-6">
            <h1 className="text-2xl font-bold">My Landing Page</h1>
          </div>
        </header>
        <main>
          <section className="bg-base-300 py-12">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4">Welcome to my landing page</h2>
                  <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lorem non sapien pharetra iaculis sit amet quis elit.</p>
                  <Button color="secondary" size="lg">Get Started</Button>
                </div>
                <div>
                  <img src="https://via.placeholder.com/400x300" alt="Placeholder" className="rounded-lg shadow-lg" />
                </div>
              </div>
            </div>
          </section>
          <section className=" py-12">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-4">Why choose us?</h2>
              <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lorem non sapien pharetra iaculis sit amet quis elit.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
                  <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lorem non sapien pharetra iaculis sit amet quis elit.</p>
                  <Button color="secondary" size="md">Learn More</Button>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
                  <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae lorem non sapien pharetra iaculis sit amet quis elit.</p>
                  <Button color="secondary" size="md">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </RouteBase>

  )
}

export default Home