
import { Route, Switch, Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';

import { Container } from "react-bootstrap"


const FAQ = () => {
    return (
        <Container className="mt-5 pb-5">
            <h5 class="text-center mb-5 pb-2 text-white">FAQ</h5>

            <div class="row pb-5 mb-5">
                <div class="col-md-6 col-lg-4 mb-4">
                    <h6 class="mb-3 text-wheat">What are terrabots?</h6>
                    <p className="text-white font-thin">
                        <strong><u>Terrabots are 3D, generative images,</u></strong>  meaning the parameters that determine the output image are randomized, with each terrabot having its own unique facial patterns, lighting, and surrounding environment.
                    </p>
                </div>

                <div class="col-md-6 col-lg-4 mb-4">
                    <h6 class="mb-3 text-wheat">How do I mint a Terrabot?</h6>
                    <p className="text-white font-thin">
                        Terrabots are 3D, generative images,Right now, we’re just getting started. If you’ve caught this project early, <strong><u> there will be a whitelist for early adopters </u></strong> who will have first access to the initial release. Stay tuned to our community discord for updates.
                    </p>
                </div>

                <div class="col-md-6 col-lg-4 mb-4">
                    <h6 class="mb-3 text-wheat">Are there any future plans for expansion?
                    </h6>
                    <p className="text-white font-thin">
                    We have many ideas on how to expand upon the Terrabots world, but again, you’ll have to join the discord at https://discord.gg/fJHYp3VcUa for any future announcements.
                    </p>
                </div>
            </div>
        </Container>

    )
}

export default FAQ