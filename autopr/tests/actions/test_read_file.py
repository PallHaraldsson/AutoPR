import os
from typing import Any, Optional

import pydantic
import pytest

from autopr.models.executable import ContextDict, ExecutableId
from autopr.tests.mock_openai import mock_openai
from autopr.tests.utils import run_action_manually


@pytest.mark.parametrize(
    "inputs, expected_output, repo_resource",
    [
        (
            {
                "filepath": "README.md",
                "ensure_exists": True,
            },
            {
                "success": True,
                "contents": "",
                'url': 'https://github.com/',
            },
            "example_repo_2",
        ),
    ],
)
@pytest.mark.asyncio
async def test_actions(
    mocker,
    inputs: ContextDict,
    expected_output: list[str],
    repo_resource: Optional[str],
):
    outputs = await run_action_manually(
        action=ExecutableId("read_file"),
        inputs=ContextDict(inputs),
        repo_resource=repo_resource,
    )
    assert outputs == expected_output
