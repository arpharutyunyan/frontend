import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {getCandidateList, setCandidateVote} from "../store/actions";

function Elections(props) {

    const candidates = useSelector(state => state.candidates);
    const [selectedCandidateId, setSelectedCandidateId] = useState();
    const token = useSelector(state => state.token);
    const errorMessage = useSelector(state => state.error);
    const isVoted = useSelector(state => state.isVoted);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCandidateList());
    }, [dispatch]);

    const handleVoted = useCallback((event) => {
        dispatch(setCandidateVote({
            candidateId: selectedCandidateId,
            token
        }))
    }, [dispatch, token, selectedCandidateId]);

    return (
        <div className="container mt-5">
            {
                !_.isEmpty(candidates) ? (
                    <>
                        {candidates.map(candidate => (
                            <div className="row d-flex justify-content-center mb-3" key={candidate.id}>
                                <div className="col-6">
                                    <div>{candidate.party.name}</div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id={`flexRadioDefault${candidate.id}`}
                                            value={candidate.id}
                                            checked={selectedCandidateId === candidate.id}
                                            onChange={() => setSelectedCandidateId(candidate.id)}
                                        />
                                        <label className="form-check-label" htmlFor={`flexRadioDefault${candidate.id}`}>
                                            {candidate.person.firstName} {candidate.person.lastName}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {
                            errorMessage ? (
                                <p className="text-danger">{errorMessage}</p>
                            ) : null
                        }
                        {
                            isVoted ? (
                                <p className="text-success">Successfully voted</p>
                            ) : null
                        }

                        <div className="row d-flex justify-content-center">
                            <div className="col-6">
                                <button type="submit" className="btn btn-primary mt-3" onClick={handleVoted}>Vote
                                </button>
                            </div>
                        </div>
                    </>
                ) : <p className="text-warning">No candidates</p>
            }
        </div>
    );
}

export default Elections;